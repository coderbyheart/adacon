import type { Page } from '#context/Pages'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { loadMarkdownContent } from './loadMarkdownContent'

export type IndexPageProps = { pages: Page[]; page: Page }

export const onBeforeRender = async (args: {
	routeParams: { slug: string }
}): Promise<{
	pageContext: { pageProps: IndexPageProps }
}> => {
	const pages = await loadMarkdownContent()
	const index = pages.find(({ slug }) => slug === args.routeParams.slug)
	if (index === undefined)
		throw new Error(`Failed to find content for "${args.routeParams.slug}"!`)
	return {
		pageContext: {
			pageProps: {
				pages,
				page: index,
			},
		},
	}
}

export const prerender = async (): Promise<string[]> =>
	(await readdir(path.join(process.cwd(), 'content')))
		.filter((s) => s.endsWith('.md') && s !== 'index.md')
		.map((s) => s.replace(/\.md$/, ''))
		.map((slug) => `/${slug}`)
