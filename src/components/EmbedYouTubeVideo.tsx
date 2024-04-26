import { ViewportObserver } from 'preact-intersection-observer'

export const EmbedYouTubeVideo = ({
	video,
	title,
}: { video: string; title: string }) => (
	<ViewportObserver
		render={({ inView, entry }) => {
			if (!inView) return null
			const width = entry?.boundingClientRect.width ?? 560
			const height = (width / 560) * 315
			return (
				<iframe
					width={width}
					height={height}
					src={`https://www.youtube-nocookie.com/embed/${video}`}
					title={title}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			)
		}}
		options={{ triggerOnce: true }}
	/>
)
