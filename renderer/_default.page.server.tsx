import renderPreact from 'preact-render-to-string'
import { ServerStyleSheet } from 'styled-components'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server'
import { version } from '../siteInfo'
import type { PageContextCustom } from './_default.page.client'

export type PageMeta = {
	title?: string
	lang?: string
}

export const render = async (
	pageContext: PageContextCustom<Record<string, unknown>>,
) => {
	const { Page, pageProps } = pageContext
	const sheet = new ServerStyleSheet()
	const viewHtml = renderPreact(sheet.collectStyles(<Page {...pageProps} />))
	const meta = pageContext.pageMeta

	return escapeInject`<!DOCTYPE html>
    <html lang="${meta?.lang ?? 'en'}">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="application-name" content="AdaCon Norway 2023" />
        <base href="${import.meta.env.BASE_URL}">
        <title>
          AdaCon Norway 2023 in Oslo${
						meta?.title !== undefined ? ` · ${meta.title}` : ''
					}
        </title>
        <meta
          name="description"
          content="AdaCon Norway is a yearly conference celebrating underrepresented folks in Tech in Norway."
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="./static/bootstrap.min.css"
        />
        <link rel="stylesheet" type="text/css" href="./static/base.css?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Satisfy&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="./static/favicon.svg" />
        <meta name="version" content="${version}" />
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(viewHtml)}</div>
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </body>
    </html>
    `
}

export const passToClient = ['pageProps']
