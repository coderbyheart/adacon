import type { VNode } from 'preact'

export const Pluralize = ({
	singular,
	plural,
	value,
}: {
	singular: (value: number) => VNode<unknown>
	plural: (value: number) => VNode<unknown>
	value: number
}): VNode<unknown> => {
	if (value !== 1) {
		return plural(value)
	}
	return singular(value)
}
