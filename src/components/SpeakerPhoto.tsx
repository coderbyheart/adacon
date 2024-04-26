import { ViewportObserver } from 'preact-intersection-observer'
import { useEffect, useState } from 'preact/hooks'
import type { Speaker } from '../../pages/content/+onBeforeRender'
import { SpeakerPhotoPlaceholder } from './SpeakerPhotoPlaceholder'

export const SpeakerPhoto = ({ speaker }: { speaker: Speaker }) => {
	const [imageUrl, setImageURL] = useState<string>()
	const [size, setSize] = useState<number>()

	useEffect(() => {
		if (size === undefined) return
		const photoUrl = `${speaker.photo}?${new URLSearchParams({
			fm: 'webp',
			w: size.toString(),
			h: size.toString(),
			q: '80',
			crop: 'center',
			fit: 'crop',
		}).toString()}`

		fetch(photoUrl, { mode: 'no-cors' }).then(() => {
			setImageURL(photoUrl)
		})
	}, [size, speaker])

	if (imageUrl !== undefined) {
		return <img alt={speaker.name} src={imageUrl} />
	}
	return (
		<ViewportObserver
			render={({ inView, entry }) => {
				if (inView)
					setSize(
						Math.floor(
							(entry?.boundingClientRect?.width ?? 250) *
								(window.devicePixelRatio ?? 1),
						),
					)
				return <SpeakerPhotoPlaceholder speaker={speaker} />
			}}
		/>
	)
}
