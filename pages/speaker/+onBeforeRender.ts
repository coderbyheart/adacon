import { loadMarkdownContent } from '../loadMarkdownContent.js'
import type { Speaker } from '../content/+onBeforeRender.js'
import type { Page } from '#context/Pages.js'
import type { PageMeta } from '../../renderer/+onRenderHtml.js'

export type SpeakerPageProps = { speaker: Speaker; pages: Page[] }

export const onBeforeRender = async (args: {
	routeParams: { speaker: string }
}): Promise<{
	pageContext: { pageProps: SpeakerPageProps; pageMeta: PageMeta }
}> => {
	const pages = await loadMarkdownContent<Page>('content')
	const speakers = await loadMarkdownContent<Speaker>('speakers')
	const speaker = speakers.find(({ slug }) => slug === args.routeParams.speaker)
	if (speaker === undefined)
		throw new Error(`Could not find speaker: ${args.routeParams.speaker}!`)

	return {
		pageContext: {
			pageProps: {
				speaker,
				pages,
			},
			pageMeta: {
				title: speaker.name,
			},
		},
	}
}
