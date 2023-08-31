import type { Page } from '#context/Pages'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { loadMarkdownContent } from './loadMarkdownContent'

export type Speaker = {
	name: string
	slug: string
	html: string
	photo?: string
	pronouns?: string
	homepage?: string
	linkedIn?: string
	email?: string
	/**
	 * @deprecated Avoid, full of Nazis.
	 */
	twitter?: string
	/**
	 * @deprecated Avoid, full of Nazis.
	 */
	bluesky?: string
}

export type IndexPageProps = { pages: Page[]; page: Page; speakers: Speaker[] }

export const onBeforeRender = async (args: {
	routeParams: { slug: string }
}): Promise<{
	pageContext: { pageProps: IndexPageProps }
}> => {
	const pages = await loadMarkdownContent<Page>('content')
	const speakers = await loadMarkdownContent<Speaker>('speakers')
	const index = pages.find(({ slug }) => slug === args.routeParams.slug)
	if (index === undefined)
		throw new Error(`Failed to find content for "${args.routeParams.slug}"!`)
	return {
		pageContext: {
			pageProps: {
				pages,
				page: index,
				speakers,
			},
		},
	}
}

export const prerender = async (): Promise<string[]> =>
	(await readdir(path.join(process.cwd(), 'content')))
		.filter((s) => s.endsWith('.md') && s !== 'index.md')
		.map((s) => s.replace(/\.md$/, ''))
		.map((slug) => `/${slug}`)
