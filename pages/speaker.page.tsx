import { Provider as PagesProvider } from '#context/Pages'
import { Speaker } from '#page/Speaker'
import type { SpeakerPageProps } from './speaker.page.server'

export const Page = ({ speaker, pages }: SpeakerPageProps) => (
	<PagesProvider pages={pages}>
		<Speaker speaker={speaker} />
	</PagesProvider>
)
