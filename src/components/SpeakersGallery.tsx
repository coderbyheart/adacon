import type { Speaker } from '../../pages/content.page.server'
import { SpeakerPhotoPlaceholder } from './SpeakerPhotoPlaceholder'
import { SpeakerPhoto } from './SpeakerPhoto'

import './Speakers.css'
import './SpeakersGallery.css'

export const SpeakersGallery = ({ speakers }: { speakers: Speaker[] }) => (
	<section class="speakers-gallery bg-highlight py-4">
		{speakers
			.sort(({ name: n1 }, { name: n2 }) => n1.localeCompare(n2))
			.sort(
				({ photo: p1 }, { photo: p2 }) =>
					(p2 === undefined ? -1 : 1) - (p1 === undefined ? -1 : 1),
			)
			.map((speaker) => (
				<SpeakerCard speaker={speaker} />
			))}
	</section>
)

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
	<div
		class="speaker d-flex justify-content-between flex-column"
		style={{
			transform: `rotate(${Math.random() * 8 - 4}deg)`,
		}}
	>
		<div>
			<a href={`/speaker/${speaker.slug}`} class="text-decoration-none">
				{speaker.photo !== undefined && <SpeakerPhoto speaker={speaker} />}
				{speaker.photo === undefined && (
					<SpeakerPhotoPlaceholder speaker={speaker} />
				)}
			</a>
			<h1 class="mt-4 p-0">{speaker.name}</h1>
			{speaker.pronouns !== undefined && (
				<small class="text-secondary" style={{ fontSize: 14 }}>
					{speaker.pronouns}
				</small>
			)}
			<div
				class="markdown"
				// rome-ignore lint/security/noDangerouslySetInnerHtml: needed here
				dangerouslySetInnerHTML={{
					__html: speaker.html,
				}}
			/>
		</div>
	</div>
)
