import { AtSign, Github, Home, Linkedin, MoveRight } from 'lucide-preact'
import type { Speaker } from '../../pages/content/+onBeforeRender'
import { SpeakerPhoto } from './SpeakerPhoto'
import { SpeakerPhotoPlaceholder } from './SpeakerPhotoPlaceholder'
import { Mastodon } from './Mastodon'

export const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
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
			<h3 class="p-0">{speaker.name}</h3>
			{speaker.pronouns !== undefined && (
				<small class="text-secondary" style={{ fontSize: 14 }}>
					{speaker.pronouns}
				</small>
			)}
		</div>
		<footer>
			<div class="d-flex justify-content-between flex-row-reverse">
				{speaker.html.length > 0 && (
					<a href={`/speaker/${speaker.slug}`} class="text-decoration-none">
						Read more <MoveRight />
					</a>
				)}
				<Links speaker={speaker} />
			</div>
		</footer>
	</div>
)
const Links = ({ speaker }: { speaker: Speaker }) => {
	const links = []
	if (speaker.homepage !== undefined)
		links.push(
			<a
				href={speaker.homepage}
				rel="noopener noreferrer"
				target="_blank"
				title={`${speaker.name}'s Homepage`}
				class="me-2"
			>
				<Home />
			</a>,
		)
	if (speaker.linkedIn !== undefined)
		links.push(
			<a
				href={`https://linkedin.com/in/${speaker.linkedIn}`}
				rel="noopener noreferrer"
				target="_blank"
				title={`${speaker.name} on LinkedIn`}
				class="me-2"
			>
				<Linkedin />
			</a>,
		)
	if (speaker.gitHub !== undefined)
		links.push(
			<a
				href={`https://github.com/${speaker.gitHub}`}
				rel="noopener noreferrer"
				target="_blank"
				title={`${speaker.name} on GitHub`}
				class="me-2"
			>
				<Github />
			</a>,
		)
	if (speaker.email !== undefined)
		links.push(
			<a
				href={`mailto:${speaker.email}`}
				rel="noopener noreferrer"
				target="_blank"
				title={`${speaker.name}'s email`}
				class="me-2"
			>
				<AtSign />
			</a>,
		)

	if (speaker.mastodon !== undefined) {
		links.push(
			<a
				href={speaker.mastodon}
				target="_blank"
				rel="noreferrer noopener friend"
				title={`${speaker.name}'s Mastodon profile`}
			>
				<Mastodon style={{ width: '24px', height: '24px' }} />
			</a>,
		)
	}
	if (links.length === 0) return null
	return <nav>{links}</nav>
}
