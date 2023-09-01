import { Footer } from '#components/Footer'
import { HeaderNav } from '#components/HeaderNav'
import type { Page } from '#context/Pages'
import './Content.css'

export const Content = ({ page }: { page: Page }) => (
	<>
		<HeaderNav />
		<main style={{ marginTop: '70px' }}>
			<div class="container py-4">
				<div class="row">
					<header class="col-lg-8 mx-auto">
						<h1 class="text-center pb-4 pt-4">{page.title}</h1>
						{page.subtitle !== undefined && (
							<p class="text-center mb-4 subtitle">
								<small>{page.subtitle}</small>
							</p>
						)}
					</header>
				</div>
				<div class="row">
					<div
						class="col-lg-8 mx-auto markdown"
						// rome-ignore lint/security/noDangerouslySetInnerHtml: Needed
						dangerouslySetInnerHTML={{
							__html: page.html,
						}}
					/>
				</div>
			</div>
		</main>
		<Footer />
	</>
)
