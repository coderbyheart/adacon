import { onBeforeRender as onBeforeRenderIndex } from './index.page.server.js'

export const onBeforeRender = onBeforeRenderIndex
export const prerender = (): string[] => ['/speakers']
