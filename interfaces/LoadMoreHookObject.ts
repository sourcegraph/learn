import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'

export default interface LoadMoreHookObject {
    records: MarkdownFileWithUrl[]
    page: number
    setPage: (number: number) => void
    currentRecords: MarkdownFileWithUrl[]
}
