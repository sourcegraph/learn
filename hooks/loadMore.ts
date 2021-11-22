import LoadMoreHookObject from '@interfaces/LoadMoreHookObject'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { PageData } from '@interfaces/PageData'
import { getCachedData } from '@lib/api/getPageData'
import { useEffect, useState } from 'react'

const useLoadMore = (initialVideos: MarkdownFileWithUrl[] | null, initialPosts: MarkdownFileWithUrl[] | null, initialPage: number): LoadMoreHookObject => {
    const [videos, setVideos] = useState<MarkdownFileWithUrl[] | null>(initialVideos)
    const [posts, setPosts] = useState<MarkdownFileWithUrl[] | null>(initialPosts)
    const [allRecords, setAllRecords] = useState<PageData>()
    const [page, setPage] = useState<number>(initialPage)
    const [currentVideos, setCurrentVideos] = useState<MarkdownFileWithUrl[] | null>(initialVideos)
    const [currentPosts, setCurrentPosts] = useState<MarkdownFileWithUrl[] | null>(initialPosts)

    useEffect(() => {
        const getAllRecords = async (): Promise<PageData> => {
            const fetchedRecords = await getCachedData() as PageData
            return fetchedRecords
        }
        getAllRecords()
            .then(response => setAllRecords(response))
            .catch(error => {
                throw new Error(`error: ${String(error)}`)
            })
    }, [])

    useEffect(() => {
        if (allRecords) {
            if (videos) {
                const getNewVideos =  allRecords?.records.videos?.slice(0, page)
                if (getNewVideos) {
                    setCurrentVideos(getNewVideos)
                }
            }
            if (posts) {
                const getNewPosts = allRecords?.records.posts?.slice(0, page)
                if (getNewPosts) {
                    setCurrentPosts(getNewPosts)
                } 
            }
        }
    }, [page, allRecords, posts, videos])

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
