import LoadMoreHookObject from '@interfaces/LoadMoreHookObject'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { useEffect, useState } from 'react'

const useLoadMore = (initialVideos: MarkdownFileWithUrl[] | null, initialPosts: MarkdownFileWithUrl[] | null, initialPage: number): LoadMoreHookObject => {
    const [videos, setVideos] = useState<MarkdownFileWithUrl[] | null>(initialVideos)
    const [posts, setPosts] = useState<MarkdownFileWithUrl[] | null>(initialPosts)
    const [page, setPage] = useState<number>(initialPage)
    const [currentVideos, setCurrentVideos] = useState<MarkdownFileWithUrl[] | null>(videos?.slice(page, 10) ?? null)
    const [currentPosts, setCurrentPosts] = useState<MarkdownFileWithUrl[] | null>(posts?.slice(page, 10) ?? null)

    useEffect(() => {
        if (videos) {
            setCurrentVideos(videos.slice(0, page))
        }
    }, [page, videos])

    useEffect(() => {
        if (posts) {
            setCurrentPosts(posts.slice(0, page))
        }
    }, [page, posts])

    return {
        videos,
        posts,
        currentVideos,
        currentPosts,
        page,
        setPage,
    }
}

export default useLoadMore
