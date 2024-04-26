import type { Page } from '#context/Pages'
import {
	onBeforeRender as contentOnBeforeRender,
	type Speaker,
} from './content/+onBeforeRender'

export type IndexPageProps = { pages: Page[]; page: Page; speakers: Speaker[] }

export const onBeforeRender = async (): Promise<{
	pageContext: { pageProps: IndexPageProps }
}> =>
	contentOnBeforeRender({
		routeParams: {
			slug: 'index',
		},
	})

export const prerender = (): string[] => ['/']
