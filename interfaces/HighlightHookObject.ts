export default interface HighlightHookObject {
    activeScrollHeader: string | null
    setActiveScrollHeader: (header: string | null) => void
    clickedHeader: string | null
    setClickedHeader: (header: string) => void
    headers: Element[] | null
    setHeaders: (headers: Element[]) => void
}
