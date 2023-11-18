export const Con: {
	date: Date
	statistics: {
		attendees: number // e.b. 200,
		days: number // e.b. 1,
		talks: number // e.b. 14,
	}
	livestream?: {
		youtube: string //e.g. 'rt_eM_KRfK4',
		vimeo: URL //e.g. new URL('https://vimeo.com/event/3782646')
	}
} = {
	date: new Date('2023-10-10T08:30:00+01:00'),
	statistics: {
		attendees: 200,
		days: 1,
		talks: 14,
	},
} as const
