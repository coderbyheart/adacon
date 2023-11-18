import { ConfStats } from '#components/ConfStats'
import { Footer } from '#components/Footer'
import { Header } from '#components/Header'
import { HeaderNav } from '#components/HeaderNav'
import { LiveStream } from '#components/LiveStream'
import { LiveUpdates } from '#components/LiveUpdates'
import { Location } from '#components/Location'
import { Speakers } from '#components/Speakers'
import { Sponsors } from '#components/Sponsors'
import { Tickets } from '#components/Tickets'
import { useCountdown } from '#context/ConfCountdown'
import type { Page } from '#context/Pages'
import { Con } from '../con.js'
import type { Speaker } from '../../pages/content.page.server'

export const Start = ({
	page,
	speakers,
}: {
	page: Page
	speakers: Speaker[]
}) => {
	const { hasStarted } = useCountdown()
	const isNextDay =
		new Date()
			.toISOString()
			.slice(0, 10)
			.localeCompare(Con.date.toISOString().slice(0, 10)) > 0
	return (
		<>
			<HeaderNav transparent={true} />
			<Header />
			{!isNextDay && <LiveUpdates />}
			<div id="about">
				<ConfStats />
			</div>
			<main class="bg-off-white">
				<div class="container py-4">
					<div class="row">
						<header class="col-lg-8 mx-auto">
							<h1 class="text-center pb-4 pt-4">{page.title}</h1>
						</header>
					</div>
					<div class="row">
						<div
							class="col-lg-8 mx-auto markdown"
							// rome-ignore lint/security/noDangerouslySetInnerHtml: needed here
							dangerouslySetInnerHTML={{
								__html: page.html,
							}}
						/>
					</div>
				</div>
				<Speakers speakers={speakers} />
				{!hasStarted && <Tickets />}
				{Con.livestream !== undefined && (
					<LiveStream
						youtube={Con.livestream.youtube}
						vimeo={Con.livestream.vimeo}
					/>
				)}
				<Sponsors />
				<Location />
			</main>
			<Footer />
		</>
	)
}
