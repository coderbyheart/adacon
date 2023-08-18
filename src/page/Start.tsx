import { ConfStats } from '#components/ConfStats'
import { Footer } from '#components/Footer'
import { Header } from '#components/Header'
import { HeaderNav } from '#components/HeaderNav'
import { Location } from '#components/Location'
import { Previously } from '#components/Previously'
import { Speakers } from '#components/Speakers'
import { Sponsors } from '#components/Sponsors'
import { Tickets } from '#components/Tickets'
import type { Page } from '#context/Pages'
import type { Speaker } from '../../pages/content.page.server'

export const Start = ({
	page,
	speakers,
}: { page: Page; speakers: Speaker[] }) => (
	<>
		<HeaderNav transparent={true} />
		<Header />
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
			<Previously />
			<Tickets />
			<Sponsors />
			<Location />
		</main>
		<Footer />
	</>
)
