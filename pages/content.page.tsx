import { Provider as PagesProvider } from '#context/Pages'
import { Content } from '#page/Content'
import type { IndexPageProps } from './index.page.server'

export const Page = ({ pages, page }: IndexPageProps) => (
	<PagesProvider pages={pages}>
		<Content page={page} />
	</PagesProvider>
)
