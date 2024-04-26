import { Contact } from '#page/Contact'
import { Provider as CountdownProvider } from '#context/ConfCountdown'

export const Page = () => (
	<CountdownProvider>
		<Contact />
	</CountdownProvider>
)
