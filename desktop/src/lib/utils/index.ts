export function containsPath(container: string | null | undefined, containment: string): boolean {
	if (container) return container.includes(containment);
	return false;
}
