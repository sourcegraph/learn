import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'

export default interface LoadMoreHookObject {
    videos: MarkdownFileWithUrl[] | null
    posts:  MarkdownFileWithUrl[] | null
    currentVideos: MarkdownFileWithUrl[] | null
    currentPosts: MarkdownFileWithUrl[] | null
    page: number
    setPage: (number: number) => void
}
