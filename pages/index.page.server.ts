import type { Page } from '#context/Pages'
import { onBeforeRender as contentOnBeforeRender } from './content.page.server'

export type IndexPageProps = { pages: Page[]; page: Page }

export const onBeforeRender = async (): Promise<{
	pageContext: { pageProps: IndexPageProps }
}> =>
	contentOnBeforeRender({
		routeParams: {
			slug: 'index',
		},
	})

export const prerender = (): string[] => ['/']
