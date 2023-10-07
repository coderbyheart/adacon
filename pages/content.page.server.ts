import type { Page } from '#context/Pages'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { loadMarkdownContent } from './loadMarkdownContent'
import type { PageMeta } from '../renderer/_default.page.server'

export type Speaker = {
	name: string
	slug: string
	html: string
	role?: 'host'
	photo?: string
	pronouns?: string
	homepage?: string
	linkedIn?: string
	gitHub?: string
	email?: string
	mastodon?: string
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
	pageContext: { pageProps: IndexPageProps; pageMeta: PageMeta }
}> => {
	const pages = await loadMarkdownContent<Page>('content')
	const speakers = await loadMarkdownContent<Speaker>('speakers')
	const page = pages.find(({ slug }) => slug === args.routeParams.slug)
	if (page === undefined)
		throw new Error(`Failed to find content for "${args.routeParams.slug}"!`)
	return {
		pageContext: {
			pageProps: {
				pages,
				page,
				speakers,
			},
			pageMeta: {
				title: page.title,
				lang: page.lang,
			},
		},
	}
}

export const prerender = async (): Promise<string[]> =>
	(await readdir(path.join(process.cwd(), 'content')))
		.filter((s) => s.endsWith('.md') && s !== 'index.md')
		.map((s) => s.replace(/\.md$/, ''))
		.map((slug) => `/${slug}`)
