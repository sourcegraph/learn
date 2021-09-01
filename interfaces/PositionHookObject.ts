export default interface PositionHookObject {
    element: Element | null
    reposition: boolean
    setElement: (element: Element) => void
}
