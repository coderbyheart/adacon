import type { Speaker } from '../pages/content.page.server'

export const speakersByYear = (speakers: Speaker[], year: number) =>
	speakers
		.filter((s) => !('role' in s))
		.filter((s) => 'events' in s && s.events.includes(year))
		.sort(({ name: n1 }, { name: n2 }) => n1.localeCompare(n2))
		.sort(
			({ photo: p1 }, { photo: p2 }) =>
				(p2 === undefined ? -1 : 1) - (p1 === undefined ? -1 : 1),
		)
