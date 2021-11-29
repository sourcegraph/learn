import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'

export interface PageData {
    records: Records
}

export interface Records {
    posts?: MarkdownFileWithUrl[]
    videos?: MarkdownFileWithUrl[]
    totalRecords?: number
}
