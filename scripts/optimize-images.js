import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_DIR = path.join(__dirname, '..', 'public')

// ─── Parámetros de calidad ───────────────────────────────────────────────────
// Medidos sobre capturas de UI reales: PSNR > 45 dB en ambos formatos, es decir
// sin diferencia perceptible. El 4:4:4 y el smartSubsample evitan que el texto
// fino y los bordes de 1px se emborronen al submuestrear el croma.
const AVIF = { quality: 80, effort: 6, chromaSubsampling: '4:4:4' }
const WEBP = { quality: 92, effort: 6, smartSubsample: true }
// El PNG se reescribe sin pérdida: mismos píxeles, mejor compresión. `palette`
// va explícito porque en sharp basta con pasar `effort` o `quality` aquí para
// que se active solo y cuantice la imagen a 256 colores — eso sí sería pérdida.
const PNG = { compressionLevel: 9, adaptiveFiltering: true, palette: false }

// Las imágenes de origen se dejan a resolución nativa. Si alguna se dispara de
// peso, redimensionar la fuente antes de pasar el script (ver IMAGE_STANDARDS).

// ────────────────────────────────────────────────────────────────────────────

const SOURCE_EXTS = ['.png', '.jpg', '.jpeg']

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const force = args.includes('--force')
const filters = args.filter(a => !a.startsWith('--'))

function formatBytes(bytes) {
	if (bytes < 1024) return `${bytes} B`
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

// Sólo las subcarpetas de public/ contienen imágenes de contenido. La raíz son
// favicons y SVGs del sitio, que no pasan por aquí.
function collectSources() {
	const sources = []

	function walk(current) {
		for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
			const full = path.join(current, entry.name)
			if (entry.isDirectory()) {
				walk(full)
				continue
			}
			if (!SOURCE_EXTS.includes(path.extname(entry.name).toLowerCase())) continue

			const rel = path.relative(PUBLIC_DIR, full)
			if (filters.length > 0 && !filters.some(f => rel.includes(f))) continue
			sources.push(full)
		}
	}

	for (const entry of fs.readdirSync(PUBLIC_DIR, { withFileTypes: true })) {
		if (entry.isDirectory()) walk(path.join(PUBLIC_DIR, entry.name))
	}

	return sources.sort()
}

// Reencodear cuesta segundos por imagen, así que se salta lo que ya está al día.
function isUpToDate(source, outputs) {
	if (force) return false
	const sourceTime = fs.statSync(source).mtimeMs
	return outputs.every(out => fs.existsSync(out) && fs.statSync(out).mtimeMs >= sourceTime)
}

async function isPixelIdentical(a, b) {
	const [rawA, rawB] = await Promise.all([sharp(a).raw().toBuffer(), sharp(b).raw().toBuffer()])
	return rawA.equals(rawB)
}

async function optimize(source) {
	const ext = path.extname(source)
	const base = source.slice(0, -ext.length)
	const label = path.relative(PUBLIC_DIR, base)

	const avifPath = `${base}.avif`
	const webpPath = `${base}.webp`
	const pngPath = `${base}.png`

	if (isUpToDate(source, [avifPath, webpPath])) {
		console.log(`   ${label}  →  al día, saltado`)
		return { before: 0, avif: 0, disk: 0 }
	}

	// Se lee a memoria antes de escribir: el PNG de salida puede ser el origen.
	const input = fs.readFileSync(source)
	const before = input.length

	const [avif, webp, png] = await Promise.all([
		sharp(input).avif(AVIF).toBuffer(),
		sharp(input).webp(WEBP).toBuffer(),
		sharp(input).png(PNG).toBuffer(),
	])

	const parts = [`avif ${formatBytes(avif.length)}`, `webp ${formatBytes(webp.length)}`]

	// Un .jpg no es un formato aceptado: se convierte siempre. Un .png en cambio
	// se pisaría a sí mismo, así que sólo se reescribe si además de pesar menos
	// se comprueba píxel a píxel que la recompresión no ha tocado nada.
	const isJpeg = ext !== '.png'
	const writePng = isJpeg || (png.length < before && (await isPixelIdentical(input, png)))
	parts.push(writePng ? `png ${formatBytes(png.length)}` : 'png intacto')

	if (!dryRun) {
		// El PNG va primero: si se escribiera al final quedaría más nuevo que los
		// otros dos y la siguiente pasada los daría por caducados.
		if (writePng) fs.writeFileSync(pngPath, png)
		fs.writeFileSync(avifPath, avif)
		fs.writeFileSync(webpPath, webp)
		if (isJpeg) fs.rmSync(source)
	}

	const saved = ((1 - avif.length / before) * 100).toFixed(0)
	console.log(`   ${label}  ${formatBytes(before)} → ${parts.join(', ')}  (avif −${saved}%)`)

	return {
		before,
		avif: avif.length,
		disk: (writePng ? png.length : before) + avif.length + webp.length,
	}
}

async function run() {
	const sources = collectSources()

	if (sources.length === 0) {
		console.log('\nNo hay imágenes que optimizar en public/.\n')
		return
	}

	console.log(`\n🖼️  Optimizando ${sources.length} imagen(es)${dryRun ? ' (dry run)' : ''}:\n`)

	const total = { before: 0, avif: 0, disk: 0 }
	for (const source of sources) {
		const result = await optimize(source)
		for (const key of Object.keys(total)) total[key] += result[key]
	}

	if (total.before === 0) {
		console.log('\n✅ Todo estaba al día. Usa --force para reencodear.\n')
		return
	}

	const saved = ((1 - total.avif / total.before) * 100).toFixed(0)
	console.log(
		`\n✅ Listo — el navegador descarga ${formatBytes(total.avif)} en avif ` +
			`donde antes eran ${formatBytes(total.before)} en png (−${saved}%).` +
			`\n   En disco quedan ${formatBytes(total.disk)} contando los 3 formatos.\n`
	)
}

run().catch(err => {
	console.error(`\n❌ ${err.message}\n`)
	process.exit(1)
})
