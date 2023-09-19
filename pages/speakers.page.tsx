import { SpeakersGallery } from '#components/SpeakersGallery'
import type { IndexPageProps } from './index.page.server'

export const Page = ({ speakers }: IndexPageProps) => (
	<SpeakersGallery speakers={speakers} />
)
