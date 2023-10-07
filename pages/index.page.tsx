import { Provider as PagesProvider } from '#context/Pages'
import { Provider as CountdownProvider } from '#context/ConfCountdown'
import { Start } from '#page/Start'
import type { IndexPageProps } from './index.page.server'

export const Page = ({ pages, page, speakers }: IndexPageProps) => (
	<PagesProvider pages={pages}>
		<CountdownProvider>
			<Start page={page} speakers={speakers} />
		</CountdownProvider>
	</PagesProvider>
)
