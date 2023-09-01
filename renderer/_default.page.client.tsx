import { formatDistanceToNow } from 'date-fns'
import type { VNode } from 'preact'
import { hydrate } from 'preact'
import type { PageMeta } from './_default.page.server'
import type { PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient } from 'vite-plugin-ssr/types'

type Page = <PageProps extends Record<string, unknown>>(
	pageProps: PageProps,
) => VNode<unknown>

export type PageContextCustom<PageProps extends Record<string, unknown>> = {
	Page: Page
	pageProps?: PageProps
	pageMeta?: PageMeta
	urlPathname: string
	exports: {
		documentProps?: {
			title?: string
			description?: string
		}
	}
}

type PageContextClient = PageContextBuiltInClient<Page> &
	PageContextCustom<Record<string, unknown>>

export const render = (pageContext: PageContextClient) => {
	const { Page, pageProps } = pageContext
	const pageViewElement = document.getElementById('page-view')
	if (pageViewElement === null)
		throw new Error('Could not find page-view element!')

	console.debug('version', VERSION)
	console.debug(
		'build time',
		BUILD_TIME,
		formatDistanceToNow(new Date(BUILD_TIME), {
			addSuffix: true,
		}),
	)

	hydrate(<Page {...pageProps} />, pageViewElement)
}
