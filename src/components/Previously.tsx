import { ViewportObserver } from 'preact-intersection-observer'
import { EmbedYouTubeVideo } from './EmbedYouTubeVideo'
import type { Speaker } from '../../pages/content/+onBeforeRender'
import { speakersByYear } from '../speakersByYear.js'
import './Speakers.css'
import { SpeakerCard } from './SpeakerCard'

export const Previously = ({ speakers }: { speakers: Speaker[] }) => {
	const speakers2023 = speakersByYear(speakers, 2023)
	return (
		<section class="py-4">
			<div class="container text-center">
				<div class="row">
					<div class="col-md-6 offset-md-3 pt-4 pb-4">
						<h2 class="fs-3 py-4">Previously</h2>
						<h3 class="fs-4 py-4">2023</h3>
						<p>
							AdaCon Norway was proud to announce the return of its conference
							in 2023. The event was held on Ada Lovelace Day as before, on
							Tuesday October 10th. Our venue was Rebel, Universitetsgata 2,
							0164 Oslo.
						</p>
						<p>
							You can watch the live-stream recording on{' '}
							<a
								href="https://youtube.com/watch/rt_eM_KRfK4"
								title="AdaCon 2023 live stream recording on YouTube"
								target="_blank"
								rel="noopener noreferrer"
							>
								YouTube
							</a>{' '}
							and{' '}
							<a
								href="https://vimeo.com/event/3782646"
								title="AdaCon 2023 live stream recording on Vimeo"
								target="_blank"
								rel="noopener noreferrer"
							>
								Vimeo
							</a>
							.
						</p>
					</div>
				</div>
				<div class="row pb-4">
					<div class="col-lg-8 offset-lg-2">
						<EmbedYouTubeVideo video="rt_eM_KRfK4" title="Live Stream 2023" />
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 offset-md-3 pt-4">
						<h5 class="fs-4 py-4">Speakers 2023</h5>
					</div>
				</div>
				<div class="row">
					<div class="py-lg-5 speakers previously">
						{speakers2023.map((speaker) => (
							<SpeakerCard speaker={speaker} key={speaker.slug} />
						))}
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 offset-md-3 pt-4 pb-4">
						<h3 class="fs-4 py-4">2019</h3>
						<p>
							In 2019 we held the first{' '}
							<a
								href="https://techwomen.no/ada-lovelace-day-2019.html"
								target="_blank"
								rel="me noreferrer noopener"
							>
								Ada Lovelace Day Mini-Conference
							</a>{' '}
							in Oslo. You can enjoy the recordings of the talk on{' '}
							<a
								href="https://www.youtube.com/@AdaConNo"
								target="_blank"
								rel="me noreferrer noopener"
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
}

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
				/>
			)
		}}
		options={{ triggerOnce: true }}
	/>
)
