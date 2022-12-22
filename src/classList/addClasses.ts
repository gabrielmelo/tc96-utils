export function addClasses(element: HTMLElement, ...className: Array<string>) {
	try {
		if(element) {
			element.classList.add(...className)
		}
	} catch (error) {
		console.error(error)
	}
}
