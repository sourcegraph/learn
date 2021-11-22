import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'

export interface PageData {
    records: Records
}

export interface Records {
    posts?: MarkdownFileWithUrl[]
    videos?: MarkdownFileWithUrl[],
    length?: number
}

export interface PostRecord {
    [index: number]: MarkdownFileWithUrl
}

export interface VideoRecord {
    [index: number]: MarkdownFileWithUrl
}
