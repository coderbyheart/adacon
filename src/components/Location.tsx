import { MapIcon } from 'lucide-preact'
import { ViewportObserver } from 'preact-intersection-observer'
import { styled } from 'styled-components'

const Tiles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    padding: 1rem;
    border: 1px solid #ffffff;
  }
  grid-gap: 1.5rem;
`

const Figures = styled.div`
  img {
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
    border: 10px solid #fff;
    max-width: 100%;
    max-height: 350px;
    &:nth-child(1) {
      transform: rotate(-4deg);
      z-index: 2;
    }
    &:nth-child(2) {
      transform: rotate(2deg);
      z-index: 2;
      margin-top: -1rem;
    }
  }
`

export const Location = () => (
	<section id="location" class="bg-highlight text-white py-4">
		<div class="container">
			<div class="row text-center py-4">
				<h2 class="py-4">Location</h2>
			</div>
			<div class="row py-lg-5">
				<div class="col-12 col-lg-7">
					<h3 class="py-4">Rebel</h3>
					<p>
						Universitetsgata 2
						<br />
						0164 Oslo
					</p>
					<p>
						<a
							href="https://goo.gl/maps/EtBqWKXHNEsUAddr5"
							target="_blank"
							rel="noreferrer noopener"
						>
							<MapIcon /> Open in Google Maps
						</a>
					</p>
					<h4 class="mt-4 mb-3">How To Get Here</h4>

					<Tiles>
						<div>
							<h5 class=" mb-3 title">By Plane</h5>
							<p>
								Take the plane to Oslo-Gardermoen (OSL) and from their take the
								train to Nationaltheatret station (ca. 30 minutes).
							</p>
						</div>
						<div>
							<h5 class=" mb-3 title">By Car</h5>
							<p>
								Drive directly to the venue address. Parking is available in the
								parking garage directly behind the building.
							</p>
							<a
								class=""
								href="https://goo.gl/maps/WxTouRr5tk1Fskxz6"
								target="_blank"
								rel="noopener noreferrer"
							>
								Get directions →
							</a>
						</div>
						<div>
							<h5 class=" mb-3 title">By Train</h5>
							<p>
								<strong>Nationaltheatret</strong> is the closest train stop.
							</p>
							<a
								class=""
								href="https://ruter.no/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Check train routes →
							</a>
						</div>
						<div>
							<h5 class=" mb-3 title">By Bus</h5>
							<p>There are multiple bus-stops close to the location.</p>
							<a
								class=""
								href="https://ruter.no/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Check bus routes →
							</a>
						</div>
					</Tiles>
				</div>
				<div class="col-12 col-lg-4 offset-lg-1 position-relative mt-5 mt-lg-0 text-center">
					<ViewportObserver
						render={({ inView }) => {
							if (!inView) return null
							return (
								<Figures>
									<img
										class="img-fluid"
										alt="Universitetsgata 2, 0164 Oslo"
										src="./static/rebel.jpg"
									/>
									<img
										class="img-fluid"
										alt="Universitetsgata 2, 0164 Oslo"
										src="./static/rebel2.jpg"
									/>
								</Figures>
							)
						}}
						options={{ triggerOnce: true }}
					/>
				</div>
			</div>
		</div>
	</section>
)
