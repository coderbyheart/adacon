import type { Speaker } from '../../pages/content.page.server'

export const SpeakerPhotoPlaceholder = ({ speaker }: { speaker: Speaker }) => (
	<img
		src="/static/ada.svg"
		width="500"
		height="500"
		class="p-4"
		alt={speaker.name}
		style={{ backgroundColor: '#6b6b6b29' }}
	/>
)
