import { styled } from 'styled-components'

const Section = styled.section`
  img {
    max-width: 250px;
  }
`

export const Sponsors = () => (
	<Section id="sponsors" class="py-4">
		<div class="container mt-4">
			<div class="row text-center py-4">
				<div class="col">
					<h2 class="py-4">Sponsors</h2>
					<p>
						<a
							href="https://www.turtlesec.no/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/turtlesec.svg"
								alt="TurtleSec"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '300px' }}
							/>
						</a>
						<br />
						Gold Sponsor
					</p>
					<p>
						<a
							href="https://www.rebel.no/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/rebel.png"
								alt="Rebel"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '300px' }}
							/>
						</a>
						<br />
						Location Sponsor
					</p>
				</div>
			</div>
			<div class="row py-md-5">
				<div class="col-12 col-lg-6 offset-lg-3">
					<p>
						If you, too, would like to support this event, which is entirely
						organized by volunteers, please reach out to us using our{' '}
						<a href="./contact">contact form</a>.
					</p>
				</div>
			</div>
		</div>
	</Section>
)
