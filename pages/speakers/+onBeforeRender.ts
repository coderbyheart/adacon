import { onBeforeRender as onBeforeRenderIndex } from '../+onBeforeRender.js'

export const onBeforeRender = onBeforeRenderIndex
export const prerender = (): string[] => ['/speakers']
