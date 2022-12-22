export function toggleClass(element: HTMLElement, className: string) {
	try {
		if(element) {
			element.classList.toggle(className)
		}
	} catch (error) {
		console.error(error)
	}
}
