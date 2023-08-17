import { Footer } from '#components/Footer'
import { Header } from '#components/Header'
import { HeaderNav } from '#components/HeaderNav'
import type { Speaker as TSpeaker } from '../../pages/content.page.server'
import './Speaker.css'

export const Speaker = ({ speaker }: { speaker: TSpeaker }) => (
	<>
		<HeaderNav transparent={true} />
		<Header />
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
					<div class="col-lg-6 mx-auto">
						<div
							class="markdown"
							// rome-ignore lint/security/noDangerouslySetInnerHtml: needed here
							dangerouslySetInnerHTML={{
								__html: speaker.html,
							}}
						/>
					</div>
					<div class="col-lg-3 mx-auto">
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
