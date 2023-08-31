import { Footer } from '#components/Footer'
import { Header } from '#components/Header'
import { HeaderNav } from '#components/HeaderNav'
import { AtSign, Blocks, Home, Linkedin, Twitter } from 'lucide-preact'
import type { Speaker as TSpeaker } from '../../pages/content.page.server'
import './Speaker.css'

export const Speaker = ({ speaker }: { speaker: TSpeaker }) => (
	<>
		<HeaderNav transparent={true} />
		<Header small />
		<main class="bg-off-white">
			<div class="container py-4">
				<div class="row pb-4">
					<header class="col-12 mx-auto ">
						<h1 class="text-center pt-4">{speaker.name}</h1>
						{speaker.pronouns !== undefined && (
							<p class="text-center ">
								<small>{speaker.pronouns}</small>
							</p>
						)}
					</header>
				</div>
				<div class="row mb-4">
					<div class="col-lg-6 mx-auto mb-4 mb-lg-0">
						<div
							class="markdown"
							// rome-ignore lint/security/noDangerouslySetInnerHtml: needed here
							dangerouslySetInnerHTML={{
								__html: speaker.html,
							}}
						/>
						{speaker.homepage !== undefined && (
							<p class="mb-1">
								<Home />{' '}
								<a
									href={speaker.homepage}
									target="_blank"
									rel="noreferrer noopener friend"
									title={`${speaker.name}'s Homepage`}
								>
									Homepage
								</a>
							</p>
						)}
						{speaker.linkedIn !== undefined && (
							<p class="mb-1">
								<Linkedin />{' '}
								<a
									href={speaker.linkedIn}
									target="_blank"
									rel="noreferrer noopener friend"
									title={`${speaker.name} on LinkedIn`}
								>
									LinkedIn
								</a>
							</p>
						)}
						{speaker.email !== undefined && (
							<p class="mb-1">
								<AtSign />{' '}
								<a
									href={`mailto:${speaker.email}`}
									target="_blank"
									rel="noreferrer noopener friend"
									title={`${speaker.name}'s email`}
								>
									{speaker.email}
								</a>
							</p>
						)}

						{speaker.twitter !== undefined && (
							<p class="mb-1">
								<Twitter />{' '}
								<abbr title={`${speaker.name}'s Twitter handle`}>
									@{speaker.twitter}
								</abbr>
							</p>
						)}
						{speaker.bluesky !== undefined && (
							<p class="mb-1">
								<Blocks />{' '}
								<abbr title={`${speaker.name}'s Bluesky handle`}>
									@{speaker.bluesky}
								</abbr>
							</p>
						)}
					</div>
					<div class="col-lg-3 mx-auto mt-4 mt-lg-0 d-flex justify-content-center align-items-start">
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
								class="speaker"
								style={{
									transform: `rotate(${Math.random() * 20 - 10}deg)`,
								}}
							/>
						)}
					</div>
				</div>
			</div>
		</main>
		<Footer />
	</>
)
