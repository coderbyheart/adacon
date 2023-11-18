import { Provider as CountdownProvider } from '#context/ConfCountdown'
import { Provider as PagesProvider } from '#context/Pages'
import { Talk } from '#page/Talk'
import type { TalkPageProps } from './talk.page.server'

export const Page = ({ talk, speaker, pages, talks }: TalkPageProps) => (
	<PagesProvider pages={pages}>
		<CountdownProvider>
			<Talk talk={talk} speaker={speaker} talks={talks} />
		</CountdownProvider>
	</PagesProvider>
)
