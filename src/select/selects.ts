export function selects(selectors: string) {
	try {
		if(selectors) {
			return document.querySelectorAll(selectors)
		}
	} catch (error) {
		console.error(error)
	}
}

