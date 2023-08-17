import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import format from 'rehype-format'
import html from 'rehype-stringify'
import { remark } from 'remark'
import extract from 'remark-extract-frontmatter'
import frontmatter from 'remark-frontmatter'
import remark2rehype from 'remark-rehype'
import yaml from 'yaml'

const parseMarkdown = remark()
	.use(frontmatter, ['yaml'])
	.use(extract, { yaml: yaml.parse })
	.use(remark2rehype)
	.use(format)
	.use(html)
export const loadMarkdownContent = async <
	T extends { html: string; slug: string },
>(
	type: 'content' | 'speakers',
): Promise<T[]> => {
	const resourceFiles = (await readdir(path.join(process.cwd(), type))).filter(
		(f) => f.endsWith('.md'),
	)

	return await Promise.all(
		resourceFiles.map(async (f) => {
			const source = await readFile(path.join(process.cwd(), type, f), 'utf-8')
			const md = await parseMarkdown.process(source)
			return {
				...md.data,
				html: md.value,
				slug: f.replace(/\.md$/, ''),
			} as T
		}),
	)
}
