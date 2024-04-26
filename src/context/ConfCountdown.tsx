import { Con } from '../con.js'
import { createContext, type ComponentChildren } from 'preact'
import { useContext } from 'preact/hooks'
import { useEffect, useState } from 'preact/hooks'

const conferenceStart = Con.date

export const ConfCountdown = createContext<{
	hasStarted: boolean
	startDate: Date
}>({
	hasStarted: false,
	startDate: conferenceStart,
})

export const Provider = ({
	children,
}: {
	children: ComponentChildren
}) => {
	const [hasStarted, setStarted] = useState<boolean>(
		conferenceStart.getTime() < Date.now(),
	)

	useEffect(() => {
		const i = setInterval(() => {
			if (conferenceStart.getTime() < Date.now()) {
				setStarted(true)
				clearInterval(i)
			}
		}, 1000)

		return () => {
			clearInterval(i)
		}
	}, [])

	return (
		<ConfCountdown.Provider
			value={{
				hasStarted,
				startDate: conferenceStart,
			}}
		>
			{children}
		</ConfCountdown.Provider>
	)
}

export const Consumer = ConfCountdown.Consumer

export const useCountdown = () => useContext(ConfCountdown)
