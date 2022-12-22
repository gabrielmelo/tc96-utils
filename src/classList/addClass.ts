export function addClass(element: HTMLElement, className: string) {
	try {
		if(element) {
			element.classList.add(className)
		}
	} catch (error) {
		console.error(error)
	}
}
