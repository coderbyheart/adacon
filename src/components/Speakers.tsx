import { Home, MoveRight, Twitter } from 'lucide-preact'
import type { Speaker } from '../../pages/content.page.server'
import './Speakers.css'
import { ViewportObserver } from 'preact-intersection-observer'
import { useState, useEffect } from 'preact/hooks'

export const Speakers = ({ speakers }: { speakers: Speaker[] }) => (
	<section id="speakers" class="bg-highlight py-4">
		<div class="container mt-4">
			<div class="row text-center py-4 text-white ">
				<h2 class="py-4">Speakers</h2>
			</div>

			<div class="py-lg-5 speakers">
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
		</div>
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
			{speaker.photo !== undefined && <Photo speaker={speaker} />}
			{speaker.photo === undefined && <Placeholder speaker={speaker} />}
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
	if (speaker.twitter !== undefined)
		links.push(
			<a
				href={`https://twitter.com/@${speaker.twitter}`}
				rel="noopener noreferrer"
				target="_blank"
				title={`${speaker.name} on Twitter`}
				class="me-2"
			>
				<Twitter />
			</a>,
		)
	if (links.length === 0) return null
	return <nav>{links}</nav>
}

const Placeholder = ({ speaker }: { speaker: Speaker }) => (
	<img
		src="/static/ada.svg"
		width="500"
		height="500"
		class="p-4"
		alt={speaker.name}
		style={{ backgroundColor: '#6b6b6b29' }}
	/>
)

const Photo = ({ speaker }: { speaker: Speaker }) => {
	const [imageUrl, setImageURL] = useState<string>()
	const [size, setSize] = useState<number>()

	useEffect(() => {
		if (size === undefined) return
		const photoUrl = `${speaker.photo}?${new URLSearchParams({
			fm: 'webp',
			w: size.toString(),
			h: size.toString(),
			q: '80',
			crop: 'center',
			fit: 'crop',
		}).toString()}`

		fetch(photoUrl, { mode: 'no-cors' }).then(() => {
			setImageURL(photoUrl)
		})
	}, [size])

	if (imageUrl !== undefined) return <img alt={speaker.name} src={imageUrl} />

	return (
		<ViewportObserver
			render={({ inView, entry }) => {
				if (inView)
					setSize(
						Math.floor(entry?.boundingClientRect?.width ?? 250) *
							(window.devicePixelRatio ?? 1),
					)
				return <Placeholder speaker={speaker} />
			}}
		/>
	)
}
