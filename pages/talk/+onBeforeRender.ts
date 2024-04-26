import { loadMarkdownContent } from '../loadMarkdownContent.js'
import type { Page } from '#context/Pages.js'
import type { Speaker } from '../content/+onBeforeRender.js'
import type { PageMeta } from '../../renderer/+onRenderHtml.js'

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
