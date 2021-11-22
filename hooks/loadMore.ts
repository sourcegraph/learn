import LoadMoreHookObject from '@interfaces/LoadMoreHookObject'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { getCachedData } from '@lib/api/getPageData'
import { useEffect, useState } from 'react'

const useLoadMore = (initialVideos: MarkdownFileWithUrl[] | null, initialPosts: MarkdownFileWithUrl[] | null, initialPage: number): LoadMoreHookObject => {
    const [videos, setVideos] = useState<MarkdownFileWithUrl[] | null>(initialVideos)
    const [posts, setPosts] = useState<MarkdownFileWithUrl[] | null>(initialPosts)
    const [page, setPage] = useState<number>(initialPage)
    const [currentVideos, setCurrentVideos] = useState<MarkdownFileWithUrl[] | null>(initialVideos)
    const [currentPosts, setCurrentPosts] = useState<MarkdownFileWithUrl[] | null>(initialPosts)

    useEffect(() => {
        if (videos) {
            const getNewVideos = async (): Promise<MarkdownFileWithUrl[]> => {
                const fetchedVideos = await getCachedData(page, 'videos') as MarkdownFileWithUrl[]
                return fetchedVideos
            }
            getNewVideos()
                .then(response => setCurrentVideos(response))
                .catch(error => {
                    throw new Error(`error: ${String(error)}`)
                })
        }
    }, [page, videos])

    useEffect(() => {
        if (posts) {
            const getNewPosts = async (): Promise<MarkdownFileWithUrl[]> => {
                const fetchedPosts = await getCachedData(page, 'posts') as MarkdownFileWithUrl[]
                return fetchedPosts
            }
            getNewPosts()
            .then(response => setCurrentPosts(response))
            .catch(error => {
                throw new Error(`error: ${String(error)}`)
            })
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
