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
				<h2 class="py-4">Sponsors</h2>
				<p>
					<a href="https://www.turtlesec.no/" rel="friend met">
						<img
							src="./static/turtlesec.svg"
							alt="TurtleSec"
							class="img-fluid mt-4 mb-2"
						/>
					</a>
					<br />
					Gold Sponsor
				</p>
				<p>
					<a href="https://www.rebel.no/" rel="friend met">
						<img
							src="./static/rebel.png"
							alt="Rebel"
							class="img-fluid mt-4 mb-2"
						/>
					</a>
					<br />
					Location Sponsor
				</p>
				<p>
					<a href="https://ndcconferences.com/" rel="friend met">
						<img
							src="./static/ndc.png"
							alt="NDC Conferences"
							class="img-fluid mt-4 mb-2"
						/>
					</a>
					<br />
					Video Sponsor
				</p>
				<p>
					<a href="https://variant.no/" rel="friend met">
						<img
							src="./static/variant.svg"
							alt="variant"
							class="img-fluid mt-4 mb-2"
						/>
					</a>
					<br />
					Travel Sponsor
				</p>
			</div>
			<div class="row py-lg-5">
				<div class="col-md-6 offset-md-3">
					<p>
						If you, too, would like to support this event, which is entirely
						organized by volunteers, please reach out to us using our{' '}
						<a href="./contact">contact form</a>.
					</p>
					<p>
						Sponsoring opportunities include (but are not limited to): Food,
						Drinks, Speaker travel and accommodation, Speaker gifts, Conference
						Badges, CV review and 1-on-1 career coaching, T-Shirts, and
						Stickers.
					</p>
				</div>
			</div>
		</div>
	</Section>
)
