export default interface HighlightHookObject {
    activeHeader: string
    headers: Element[] | null
    setHeaders: (headers: Element[]) => void
}
