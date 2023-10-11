export const Con: {
	date: Date
	ticketsLink?: URL
	notificationLink: URL
	registrationOpens: Date
	statistics: {
		attendees: number
		days: number
		talks: number
	}
	liveStream?: {
		youtubeVideoId?: string // e.g. rt_eM_KRfK4
		vimeoId?: string // e.g. 3782646
	}
} = {
	date: new Date('2024-10-08T08:30:00+01:00'),
	registrationOpens: new Date('2024-09-02T08:30:00+01:00'),
	statistics: {
		attendees: 200,
		days: 1,
		talks: 14,
	},
	notificationLink: new URL('https://forms.gle/tBWenmbV58g9tguZ6'),
}
