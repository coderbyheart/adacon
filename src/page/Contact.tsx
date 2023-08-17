import { ContactForm } from '#components/ContactForm'
import { Footer } from '#components/Footer'
import { HeaderNav } from '#components/HeaderNav'

export const Contact = () => (
	<>
		<HeaderNav />
		<main style={{ marginTop: '70px' }}>
			<div class="container">
				<div class="row">
					<header class="col-lg-8 mx-auto">
						<h1 class="text-center pb-4 pt-4">Contact</h1>
					</header>
				</div>
				<div class="row">
					<div class="col-md-6 offset-md-3 mb-4">
						<ContactForm />
					</div>
				</div>
			</div>
		</main>
		<Footer />
	</>
)
