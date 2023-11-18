import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { loadMarkdownContent } from './loadMarkdownContent.js'
import type { Page } from '#context/Pages.js'
import type { PageMeta } from '../renderer/_default.page.server.js'
import type { Speaker } from './content.page.server.js'

export type Talk = {
	/**
	 * Speaker slug
	 */
	speaker: string
	title: string
	html: string
	slug: string
	video: string
}

export type TalkPageProps = {
	talk: Talk
	speaker: Speaker
	talks: Talk[]
	pages: Page[]
}

export const prerender = async (): Promise<string[]> =>
	(await readdir(path.join(process.cwd(), 'talks')))
		.filter((s) => s.endsWith('.md'))
		.map((s) => s.replace(/\.md$/, ''))
		.map((slug) => `/talk/${slug}`)

export const onBeforeRender = async (args: {
	routeParams: { talk: string }
}): Promise<{
	pageContext: { pageProps: TalkPageProps; pageMeta: PageMeta }
}> => {
	const pages = await loadMarkdownContent<Page>('content')
	const talks = await loadMarkdownContent<Talk>('talks')
	const talk = talks.find(({ slug }) => slug === args.routeParams.talk)
	if (talk === undefined)
		throw new Error(`Could not find talk: ${args.routeParams.talk}!`)

	const speakers = await loadMarkdownContent<Speaker>('speakers')
	const speaker = speakers.find(({ slug }) => slug === talk.speaker)
	if (speaker === undefined)
		throw new Error(`Could not find speaker: ${talk.speaker}!`)

	return {
		pageContext: {
			pageProps: {
				talk,
				pages,
				speaker,
				talks: talks.filter(({ speaker }) => speaker === talk.speaker),
			},
			pageMeta: {
				title: talk.title,
			},
		},
	}
}
