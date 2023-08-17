import { Footer } from '@components/Footer'
import { HeaderNav } from '@components/HeaderNav'
import type { LogoColors } from '@components/Logo'
import {
	Business,
	Dark,
	Logo,
	Pink,
	Pride,
	Punk,
	Random,
	TransBlack,
	TransBlue,
} from '@components/Logo'
import { useState } from 'preact/hooks'
import { styled } from 'styled-components'

const Main = styled.div`
	svg {
		max-width: 100%;
		height: 250px;
		&.small {
			height: 33%;
			width: 33%;
		}
	}
`

export const Logos = () => {
	const [randos, setRandos] = useState<LogoColors[]>([])

	return (
		<>
			<HeaderNav />
			<Main style={{ marginTop: '70px' }}>
				<div class="container">
					<div class="row">
						<header class="col-lg-8 mx-auto">
							<h1 class="text-center pb-4 pt-4">Ada Lovelace Logos</h1>
						</header>
					</div>
					<div class="row">
						<div class="col-md-6 offset-md-3 mb-4">
							<p>
								Click on a logo to download the SVG. You can also generate
								random variants.
							</p>
							<p>
								To learn more about this logo visit{' '}
								<a
									href="https://techwomen.no/trud-antzee-logo-design/"
									target="_blank"
									rel="me noreferrer noopener"
								>
									Creating the Tech Women Norway Logo
								</a>
								.
							</p>
						</div>
					</div>
					<div class={`row ${Main}`}>
						<div class="col-md-4 mb-4">
							<h2 class="text-center">Business</h2>
							<Business />
						</div>
						<div class="col-md-4 mb-4">
							<h2 class="text-center">Dark</h2>
							<Dark />
						</div>
						<div class="col-md-4 mb-4">
							<h2 class="text-center">Pink</h2>
							<Pink />
						</div>
						<div class="col-md-4 mb-4">
							<h2 class="text-center">Pride</h2>
							<Pride />
						</div>
						<div class="col-md-4 mb-4">
							<h2 class="text-center">Punk</h2>
							<Punk />
						</div>
						<div class="col-md-4 mb-4">
							<h2 class="text-center">Trans (Black)</h2>
							<TransBlack />
						</div>
						<div class="col-md-4 mb-4">
							<h2 class="text-center">Trans (Blue)</h2>
							<TransBlue />
						</div>
						<div class="col-md-4 mb-4">
							<h2 class="text-center">Random</h2>
							<Random
								onRandom={(newColors) =>
									setRandos((r) => [newColors, ...r].slice(0, 10))
								}
							/>
						</div>
						<div class="col-md-4 mb-4">
							{randos
								.slice(1)
								.map(([background, keyword, value, token, resource, id]) => (
									<Logo
										background={background}
										keyword={keyword}
										value={value}
										token={token}
										resource={resource}
										id={id}
										class="small"
									/>
								))}
						</div>
					</div>
				</div>
			</Main>
			<Footer />
		</>
	)
}
