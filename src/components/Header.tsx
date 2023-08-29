import { Calendar, MapPin } from 'lucide-preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import { styled } from 'styled-components'
import { Con } from '../con'
import { shuffleArray } from '../shuffleArray'
import { Countdown } from './Countdown'

const TitleWrapper = styled.header`
  width: 100%;
  background-color: var(--color-dark-bg);
  position: relative;
  & > * {
    z-index: 100;
    position: relative;
  }
  min-height: 50vh;
  display: flex;
  align-items: center;
`

const TitleWrapperSmall = styled(TitleWrapper)`
  min-height: 30vh;
`

const BG = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.25;
  filter: blur(1px);
  transition: background-image 1s linear;
`
const images = [
	'https://cdn.sanity.io/images/q0ipzqdg/production/0de63fc64eec56092fe8908a58424ac5914fc041-4556x3417.jpg',
	'https://cdn.sanity.io/images/q0ipzqdg/production/234cb48ae38c1dfdf62c6eef22b900a3fa6ffb8b-6240x4160.jpg',
	'https://cdn.sanity.io/images/q0ipzqdg/production/a06c45e862c9ec4a7736a3f56fdda08a9f7c75e6-3928x2060.jpg',
	'https://cdn.sanity.io/images/q0ipzqdg/production/267f3ce8d29614e26981788194ad1e8c2061c5c7-3932x2324.jpg',
	'https://cdn.sanity.io/images/q0ipzqdg/production/5dcaa8d0785aa874c688f3a9d8cd9cfbe657785a-4004x2436.jpg',
	'https://cdn.sanity.io/images/q0ipzqdg/production/ed06da4037fc2cd3e516e37e5fda7e34a9d6815a-4184x3138.jpg',
	'https://cdn.sanity.io/images/q0ipzqdg/production/0b6d1317e9faf9dfed591a85051fa946e2ecb9dd-4002x2358.jpg',
	'https://cdn.sanity.io/images/q0ipzqdg/production/5c39b1e2a482c736647af41d7f82253b27d7dee7-4032x3024.jpg',
]
shuffleArray(images)

function* iter(array: string[]): Iterator<string> {
	let i = 0
	while (true) {
		yield array[i] as string
		if (++i > array.length - 1) i = 0
	}
}

const imagesIter = iter(images)

export const Header = ({ small }: { small?: true }) => {
	const bgEl = useRef<HTMLDivElement>(null)
	const [size, setSize] = useState<[number, number]>()
	const [currentImage, setCurrentImage] = useState<string>(
		imagesIter.next().value,
	)

	useEffect(() => {
		if (bgEl.current === null) return
		const el = bgEl.current
		const w = Math.floor(
			(el.clientWidth / 100) * 100 * (window.devicePixelRatio ?? 1),
		)
		const h = Math.floor(
			(el.clientHeight / 100) * 100 * (window.devicePixelRatio ?? 1),
		)
		setSize([w, h])
	}, [bgEl])

	useEffect(() => {
		const i = setInterval(() => {
			setCurrentImage(imagesIter.next().value)
		}, 5000)

		return () => {
			clearInterval(i)
		}
	}, [])

	let bg = ''
	if (size !== undefined) {
		const [w, h] = size
		const imageArgs = new URLSearchParams()
		imageArgs.set('fit', 'crop')
		imageArgs.set('fm', 'webp')
		imageArgs.set('q', '25')
		imageArgs.set('w', w.toString())
		imageArgs.set('h', h.toString())
		bg = `${currentImage}?${imageArgs.toString()}`
	}

	const Wrapper = small ? TitleWrapperSmall : TitleWrapper

	return (
		<Wrapper ref={bgEl}>
			<BG style={{ backgroundImage: `url(${bg})` }} />
			<div class="container">
				<div class="text-secondary py-5">
					<div class="py-5">
						<h1 class="text-white">AdaCon Norway 2023</h1>
						<p class="fs-4 font-headline text-white">
							<Calendar />{' '}
							{Con.date.toLocaleDateString(undefined, {
								weekday: 'short',
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}{' '}
							<MapPin /> Rebel, Oslo, Norway
						</p>
						<div class="col-lg-6">
							<p class="fs-4 text-white fw-semibold">
								Celebrating the Diversity of the Norwegian Tech Scene in:
								<br />
								<Countdown />
							</p>
							<p>
								<a
									href="./#tickets"
									class="btn btn-primary fs-5 fw-bold font-headline "
								>
									Get Tickets
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}
