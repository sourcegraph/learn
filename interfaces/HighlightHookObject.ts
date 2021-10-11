export default interface HighlightHookObject {
    activeHeader: string
    setActiveHeader: (header: string) => void
    headers: Element[] | null
    setHeaders: (headers: Element[]) => void
}
