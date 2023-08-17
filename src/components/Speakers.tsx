import { MoveRight } from 'lucide-preact'
import type { Speaker } from '../../pages/content.page.server'
import './Speakers.css'

export const Speakers = ({ speakers }: { speakers: Speaker[] }) => (
	<section id="speakers" class="py-4">
		<div class="container mt-4">
			<div class="row text-center py-4">
				<h2 class="py-4">Speakers</h2>
			</div>

			<div class="row py-lg-5 speakers">
				{speakers
					.sort(({ name: n1 }, { name: n2 }) => n1.localeCompare(n2))
					.sort(
						({ photo: p1 }, { photo: p2 }) =>
							(p2 === undefined ? -1 : 1) - (p1 === undefined ? -1 : 1),
					)
					.map((speaker) => (
						<SpeakerCard speaker={speaker} />
					))}
			</div>
			<div class="row py-lg-5">
				<div class="col-md-8 offset-md-2">
					<p>
						Help us build an amazing line-up for the next AdaCon Norway by
						tipping us great speakers and workshop facilitators using our{' '}
						<a
							href="https://forms.gle/53atUvDmZvn3ypTc6"
							target="_blank"
							rel="noreferrer noopener"
						>
							speaker submission form
						</a>
						.
					</p>
					<p>
						We are looking for members of the tech scene in Norway that are
						hands-on creators, builders, and makers of technology. We want to
						see those who love to share about a topic or a project that matters
						to them and that the audience will benefit from learning about. We
						do not care about experience as a speaker. We will pair all our
						speakers with a personal coach to help prepare for the event.
					</p>
				</div>
			</div>
		</div>
	</section>
)

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
	<div class="speaker d-flex justify-content-between flex-column">
		<div>
			{speaker.photo !== undefined && (
				<img
					alt={speaker.name}
					src={`${speaker.photo}?${new URLSearchParams({
						fm: 'webp',
						w: '500',
						h: '500',
						q: '80',
						crop: 'center',
						fit: 'crop',
					}).toString()}`}
				/>
			)}
			{speaker.photo === undefined && (
				<img
					src="/static/ada.svg"
					width="500"
					height="500"
					class="p-4"
					alt={speaker.name}
					style={{ backgroundColor: '#6b6b6b29' }}
				/>
			)}
			<h3 class="mt-4 ms-4 me-4 p-0">{speaker.name}</h3>
			{speaker.pronouns !== undefined && (
				<small class="text-secondary ms-4 me-4" style={{ fontSize: 14 }}>
					{speaker.pronouns}
				</small>
			)}
		</div>
		<div class="mb-2 ms-4 me-4">
			{speaker.html.length > 0 && (
				<p>
					<a href={`/speaker/${speaker.slug}`}>
						Read more <MoveRight />
					</a>
				</p>
			)}
		</div>
	</div>
)
