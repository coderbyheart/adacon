import { ViewportObserver } from 'preact-intersection-observer'

export const Previously = () => (
	<section class="bg-highlight py-4">
		<div class="container text-white text-center">
			<div class="row">
				<div class="col-md-6 offset-md-3 pt-4 pb-4">
					<h2 class="fs-4 text-white py-4">Previously</h2>
					<p class="text-white">
						In 2019 we held the first{' '}
						<a
							href="https://techwomen.no/ada-lovelace-day-2019.html"
							target="_blank"
							rel="me"
						>
							Ada Lovelace Day Mini-Conference
						</a>{' '}
						in Oslo. You can enjoy the recordings of the talk on{' '}
						<a
							href="https://www.youtube.com/@TechWomenNorway"
							target="_blank"
							rel="me"
						>
							our YouTube channel
						</a>
						.
					</p>
				</div>
			</div>
			<div class="row pb-4">
				<div class="col-lg-8 offset-lg-2">
					<EmbedPlaylist
						list="PL6JNLg5GnxPhJkUm8mihIAEdi54WJYBP_"
						title="Ada Lovelace Day 2019"
					/>
				</div>
			</div>
		</div>
	</section>
)

const EmbedPlaylist = ({ list, title }: { list: string; title: string }) => (
	<ViewportObserver
		render={({ inView, entry }) => {
			if (!inView) return null
			const width = entry?.boundingClientRect.width ?? 560
			const height = (width / 560) * 315
			return (
				<iframe
					width={width}
					height={height}
					src={`https://www.youtube-nocookie.com/embed/videoseries?list=${list}`}
					title={title}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			)
		}}
		options={{ triggerOnce: true }}
	></ViewportObserver>
)
