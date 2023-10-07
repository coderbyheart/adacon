import { AtSign, Github, Home, Linkedin, MoveRight } from 'lucide-preact'
import type { Speaker } from '../../pages/content.page.server'
import './Speakers.css'
import { SpeakerPhoto } from './SpeakerPhoto'
import { SpeakerPhotoPlaceholder } from './SpeakerPhotoPlaceholder'
import { Mastodon } from './Mastodon'

export const Speakers = ({ speakers }: { speakers: Speaker[] }) => {
	const hosts = speakers
		.filter(({ role }) => role === 'host')
		.sort(
			({ order: o1 }, { order: o2 }) =>
				(o1 ?? Number.MAX_SAFE_INTEGER) - (o2 ?? Number.MAX_SAFE_INTEGER),
		)
	return (
		<section id="speakers" class="bg-highlight py-4">
			<div class="container mt-4">
				<div class="row text-center py-4 text-white ">
					<h2 class="py-4">Speakers</h2>
				</div>
				<div class="py-lg-5 speakers">
					{speakers
						.filter(({ role }) => role === undefined)
						.sort(({ name: n1 }, { name: n2 }) => n1.localeCompare(n2))
						.sort(
							({ photo: p1 }, { photo: p2 }) =>
								(p2 === undefined ? -1 : 1) - (p1 === undefined ? -1 : 1),
						)
						.map((speaker) => (
							<SpeakerCard speaker={speaker} />
						))}
				</div>
				{hosts.length > 0 && (
					<>
						<div class="row text-center py-4 text-white ">
							<h2 class="py-4">Hosted by</h2>
							<div class="d-flex justify-content-center">
								{hosts.map((host) => (
									<SpeakerCard speaker={host} />
								))}
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	)
}

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
			<h3 class="mt-4 p-0">{speaker.name}</h3>
			{speaker.pronouns !== undefined && (
				<small class="text-secondary" style={{ fontSize: 14 }}>
					{speaker.pronouns}
				</small>
			)}
		</div>
		<div class="d-flex justify-content-between flex-row-reverse">
			{speaker.html.length > 0 && (
				<a href={`/speaker/${speaker.slug}`} class="text-decoration-none">
					Read more <MoveRight />
				</a>
			)}
			<Links speaker={speaker} />
		</div>
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
