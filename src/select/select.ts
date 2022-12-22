export function select(selector: string) {
	try {
		if(selector) {
			return document.querySelector(selector)
		}
	} catch (error) {
		console.error(error)
	}
}
