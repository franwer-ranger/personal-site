import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_DIR = path.join(__dirname, '..', 'public')

// ─── Size thresholds ─────────────────────────────────────────────────────────
const SIZE_LIMITS = {
	'.avif': 200 * 1024, // 200 KB
	'.webp': 350 * 1024, // 350 KB
}
// PNG is not checked: it's the last-resort fallback and can be larger

// ────────────────────────────────────────────────────────────────────────────

const IMAGE_EXTS = ['.avif', '.webp', '.png', '.jpg', '.jpeg']

function formatBytes(bytes) {
	if (bytes < 1024) return `${bytes} B`
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

// Sólo las subcarpetas de public/ son imágenes de contenido. La raíz son los
// favicons y SVGs del sitio, que no siguen la regla del triplete.
function scan(dir) {
	const groups = new Map()

	function walk(current) {
		for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
			const full = path.join(current, entry.name)
			if (entry.isDirectory()) {
				walk(full)
				continue
			}
			const ext = path.extname(entry.name).toLowerCase()
			if (!IMAGE_EXTS.includes(ext)) continue

			const base = full.slice(0, -ext.length)
			if (!groups.has(base)) groups.set(base, {})
			groups.get(base)[ext] = full
		}
	}

	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		if (entry.isDirectory()) walk(path.join(dir, entry.name))
	}

	return groups
}

function check() {
	const groups = scan(PUBLIC_DIR)
	const errors = []
	const warnings = []

	for (const [base, formats] of groups) {
		const label = path.relative(PUBLIC_DIR, base)

		// ── Error: .jpg not allowed ───────────────────────────────────────────
		for (const ext of ['.jpg', '.jpeg']) {
			if (formats[ext]) {
				errors.push(`${label}${ext}  →  remove (use .avif + .webp + .png)`)
			}
		}

		// SVG-only is valid, no triplet needed
		if (!formats['.png'] && !formats['.avif'] && !formats['.webp']) continue

		// ── Warning: incomplete triplet ──────────────────────────────────────
		const missing = ['.avif', '.webp', '.png'].filter(ext => !formats[ext])
		if (missing.length > 0) {
			warnings.push(`${label}  →  missing formats: ${missing.join(', ')}`)
		}

		// ── Warning: size exceeded ───────────────────────────────────────────
		for (const [ext, limit] of Object.entries(SIZE_LIMITS)) {
			if (!formats[ext]) continue
			const size = fs.statSync(formats[ext]).size
			if (size > limit) {
				warnings.push(`${label}${ext}  →  ${formatBytes(size)} (limit ${formatBytes(limit)})`)
			}
		}
	}

	// ── Output ───────────────────────────────────────────────────────────────
	if (warnings.length > 0) {
		console.log('\n⚠️  Warnings:')
		for (const w of warnings) console.log(`   ${w}`)
	}

	if (errors.length > 0) {
		console.log('\n❌ Errors (build will fail):')
		for (const e of errors) console.log(`   ${e}`)
		console.log()
		process.exit(1)
	}

	const status = warnings.length > 0 ? 'with warnings' : 'no issues'
	console.log(`\n✅ Assets verified — ${status}.\n`)
}

check()
