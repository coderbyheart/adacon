import { readdir } from 'node:fs/promises'
import path from 'node:path'

export const onBeforePrerenderStart = async (): Promise<string[]> =>
	(await readdir(path.join(process.cwd(), 'content')))
		.filter((s) => s.endsWith('.md') && s !== 'index.md')
		.map((s) => s.replace(/\.md$/, ''))
		.map((slug) => `/${slug}`)
