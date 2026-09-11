import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_DIR = path.join(__dirname, '..', 'public')

// Las social cards viven en la raíz de public/: no son imágenes de contenido y
// no siguen la regla del triplete que comprueba check-assets.js.
const WIDTH = 1200
const HEIGHT = 630
const PAD = 88

const INK = '#11131a'
const MUTED = '#50596a'
const SUBTLE = '#626c7d'
const ACCENT = '#4350d8'
const CANVAS = '#f7f8fb'
const BORDER = '#d7dce6'

// Las fuentes del proyecto no están instaladas en el sistema, así que el
// renderizado cae en la grotesca del sistema. Es una sustitución aceptable para
// una imagen estática y evita depender de fontconfig.
const SANS = "'Instrument Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
const MONO = "'IBM Plex Mono', 'SF Mono', Menlo, Consolas, monospace"

const TRACE = {
	es: ['Problema', 'Especificación', 'Construcción', 'Revisión', 'Entrega'],
	en: ['Problem', 'Specification', 'Build', 'Review', 'Delivery'],
}

const CARDS = [
	{
		name: 'og-default-es',
		locale: 'es',
		kicker: 'FRAN BARAHONA · PRODUCT ENGINEER',
		title: 'Product Engineer',
		subtitle:
			'Superficies web completas, la arquitectura que hay debajo y trabajo con agentes de IA.',
	},
	{
		name: 'og-default-en',
		locale: 'en',
		kicker: 'FRAN BARAHONA · PRODUCT ENGINEER',
		title: 'Product Engineer',
		subtitle: 'Whole web surfaces, the architecture under them, and engineering work with AI agents.',
	},
	{
		name: 'og-webel-es',
		locale: 'es',
		kicker: 'CASO · FRAN BARAHONA',
		title: 'Webel',
		subtitle:
			'Responsable del ecosistema web: app B2C, plataforma B2B, dashboard interno, SEO, emails y librería compartida.',
	},
	{
		name: 'og-webel-en',
		locale: 'en',
		kicker: 'CASE · FRAN BARAHONA',
		title: 'Webel',
		subtitle:
			'Responsible for the web platform: B2C app, B2B platform, internal dashboard, SEO, email, and the shared library.',
	},
	{
		name: 'og-aurorajobs-es',
		locale: 'es',
		kicker: 'CASO · FRAN BARAHONA',
		title: 'AuroraJobs',
		subtitle:
			'Responsable de la aplicación de punta a punta en un monolito Ruby on Rails, entre 2021 y 2024.',
	},
	{
		name: 'og-aurorajobs-en',
		locale: 'en',
		kicker: 'CASE · FRAN BARAHONA',
		title: 'AuroraJobs',
		subtitle:
			'Responsible for the application end to end in a Ruby on Rails monolith, from 2021 to 2024.',
	},
]

const escape = text =>
	text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// SVG no reparte el texto en líneas, así que se calcula a mano con un ancho
// medio de carácter. 0.52 em va bien para una grotesca en cuerpo grande.
function wrap(text, fontSize, maxWidth) {
	const perChar = fontSize * 0.52
	const max = Math.floor(maxWidth / perChar)
	const lines = []
	let line = ''

	for (const word of text.split(' ')) {
		const candidate = line ? `${line} ${word}` : word
		if (candidate.length > max && line) {
			lines.push(line)
			line = word
		} else {
			line = candidate
		}
	}
	if (line) lines.push(line)
	return lines
}

function trace(locale) {
	const steps = TRACE[locale]
	const usable = WIDTH - PAD * 2
	const gap = usable / (steps.length - 1)
	const y = 512

	const line = `<line x1="${PAD}" y1="${y}" x2="${PAD + usable}" y2="${y}" stroke="${BORDER}" stroke-width="2" />`

	const nodes = steps
		.map((step, index) => {
			const x = PAD + gap * index
			const last = index === steps.length - 1
			const fill = last ? ACCENT : CANVAS
			const textColor = last ? ACCENT : SUBTLE
			return `
        <circle cx="${x}" cy="${y}" r="9" fill="${fill}" stroke="${ACCENT}" stroke-width="2" />
        <text x="${x}" y="${y + 46}" font-family="${MONO}" font-size="21" fill="${textColor}" text-anchor="${index === 0 ? 'start' : last ? 'end' : 'middle'}">${escape(step)}</text>`
		})
		.join('')

	return line + nodes
}

function card({ locale, kicker, title, subtitle }) {
	const subtitleLines = wrap(subtitle, 32, WIDTH - PAD * 2 - 40)
	const subtitleY = 360
	const subtitleSvg = subtitleLines
		.map(
			(text, index) =>
				`<text x="${PAD}" y="${subtitleY + index * 44}" font-family="${SANS}" font-size="32" fill="${MUTED}">${escape(text)}</text>`,
		)
		.join('\n    ')

	return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <rect width="${WIDTH}" height="${HEIGHT}" fill="${CANVAS}" />
    <rect width="${WIDTH}" height="10" fill="${ACCENT}" />
    <text x="${PAD}" y="${PAD + 60}" font-family="${MONO}" font-size="24" letter-spacing="2" fill="${ACCENT}">${escape(kicker)}</text>
    <text x="${PAD}" y="290" font-family="${SANS}" font-size="104" font-weight="700" letter-spacing="-4" fill="${INK}">${escape(title)}</text>
    ${subtitleSvg}
    ${trace(locale)}
  </svg>`
}

async function run() {
	console.log(`\n🖼️  Generando ${CARDS.length} social cards (${WIDTH} × ${HEIGHT}):\n`)

	for (const config of CARDS) {
		const file = path.join(PUBLIC_DIR, `${config.name}.png`)
		const buffer = await sharp(Buffer.from(card(config)))
			.png({ compressionLevel: 9 })
			.toBuffer()
		fs.writeFileSync(file, buffer)
		console.log(`   ${config.name}.png  →  ${(buffer.length / 1024).toFixed(1)} KB`)
	}

	console.log('\n✅ Listo.\n')
}

run().catch(err => {
	console.error(`\n❌ ${err.message}\n`)
	process.exit(1)
})
