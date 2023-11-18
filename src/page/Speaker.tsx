import { Footer } from '#components/Footer'
import { Header } from '#components/Header'
import { HeaderNav } from '#components/HeaderNav'
import { AtSign, Blocks, Github, Home, Linkedin, Twitter } from 'lucide-preact'
import type { Speaker as TSpeaker } from '../../pages/content.page.server'
import './Speaker.css'
import { Mastodon } from '#components/Mastodon'
import { EmbedVideo } from '#components/EmbedVideo'
import type { Talk } from '../../pages/talk.page.server'

export const Speaker = ({
	speaker,
	talks,
}: { speaker: TSpeaker; talks: Talk[] }) => (
	<>
		<HeaderNav transparent={true} />
		<Header small />
		<main class="bg-off-white">
			<SpeakerInfo speaker={speaker} talks={talks} />
		</main>
		<Footer />
	</>
)

export const SpeakerInfo = ({
	speaker,
	talks,
}: { speaker: TSpeaker; talks: Talk[] }) => (
	<div class="container py-4">
		<div class="row pb-4">
			<header class="col-12 col-lg-10 offset-lg-1">
				<h1 class="text-center pt-4">{speaker.name}</h1>
				{speaker.pronouns !== undefined && (
					<p class="text-center ">
						<small>{speaker.pronouns}</small>
					</p>
				)}
			</header>
		</div>
		<div class="row mb-4">
			<div class="col-lg-5 mb-4 mb-lg-0 offset-lg-1">
				<div
					class="markdown"
					// rome-ignore lint/security/noDangerouslySetInnerHtml: needed here
					dangerouslySetInnerHTML={{
						__html: speaker.html,
					}}
				/>
				{talks.length > 0 && (
					<div class="mt-4">
						<h2>Talks</h2>
						<ul>
							{talks.map((talk) => (
								<li>
									<a href={`/talk/${talk.slug}`}>{talk.title}</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div class="col-lg-3 mt-4 mt-lg-0 offset-lg-1">
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
						class="speaker mb-4"
						style={{
							transform: `rotate(${Math.random() * 20 - 10}deg)`,
						}}
					/>
				)}
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
							href={`https://linkedin.com/in/${speaker.linkedIn}`}
							target="_blank"
							rel="noreferrer noopener friend"
							title={`${speaker.name} on LinkedIn`}
						>
							LinkedIn
						</a>
					</p>
				)}
				{speaker.gitHub !== undefined && (
					<p class="mb-1">
						<Github />{' '}
						<a
							href={`https://github.com/${speaker.gitHub}`}
							target="_blank"
							rel="noreferrer noopener friend"
							title={`${speaker.name} on GitHub`}
						>
							GitHub
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
				{speaker.mastodon !== undefined && (
					<p class="mb-1">
						<Mastodon style={{ width: '24px', height: '24px' }} />{' '}
						<abbr title={`${speaker.name}'s Mastodon profile`}>
							<a
								href={speaker.mastodon}
								target="_blank"
								rel="noreferrer noopener friend"
								title={`${speaker.name}'s Mastodon profile`}
							>
								Mastodon
							</a>
						</abbr>
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
		</div>
		<div class="row">
			<div class="col-12 col-lg-5 offset-lg-1">
				{speaker.video !== undefined && <EmbedVideo video={speaker.video} />}
			</div>
		</div>
	</div>
)
