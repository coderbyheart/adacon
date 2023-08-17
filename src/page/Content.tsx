import { Footer } from '@components/Footer'
import { HeaderNav } from '@components/HeaderNav'
import type { Page } from '@context/Pages'

export const Content = ({ page }: { page: Page }) => (
	<>
		<HeaderNav />
		<main style={{ marginTop: '70px' }}>
			<div class="container py-4">
				<div class="row">
					<header class="col-lg-8 mx-auto">
						<h1 class="text-center pb-4 pt-4">{page.title}</h1>
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
