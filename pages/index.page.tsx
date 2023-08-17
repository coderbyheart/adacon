import { Provider as PagesProvider } from '#context/Pages'
import { Start } from '#page/Start'
import type { IndexPageProps } from './index.page.server'

export const Page = ({ pages, page }: IndexPageProps) => (
	<PagesProvider pages={pages}>
		<Start page={page} />
	</PagesProvider>
)
