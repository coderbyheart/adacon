import { Provider as CountdownProvider } from '#context/ConfCountdown'
import { Provider as PagesProvider } from '#context/Pages'
import { Speaker } from '#page/Speaker'
import type { SpeakerPageProps } from './+onBeforeRender'

export const Page = ({ speaker, pages }: SpeakerPageProps) => (
	<PagesProvider pages={pages}>
		<CountdownProvider>
			<Speaker speaker={speaker} />
		</CountdownProvider>
	</PagesProvider>
)
