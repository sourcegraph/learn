import LoadMoreHookObject from '@interfaces/LoadMoreHookObject'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { PageData } from '@interfaces/PageData'
import { getCachedData } from '@lib/api/getPageData'
import filterRecordsWithTag from '@util/filterRecordsWithTag'
import { useEffect, useState } from 'react'

const useLoadMore = (
        initialVideos: MarkdownFileWithUrl[] | null,
        initialPosts: MarkdownFileWithUrl[] | null,
        initialPage: number,
        initialTag?: string
): LoadMoreHookObject => {
    const [tag, setTag] = useState<string | null>(initialTag ?? null)
    const [videos, setVideos] = useState<MarkdownFileWithUrl[] | null>(initialVideos)
    const [posts, setPosts] = useState<MarkdownFileWithUrl[] | null>(initialPosts)
    const [allRecords, setAllRecords] = useState<PageData>()
    const [page, setPage] = useState<number>(initialPage)
    const [currentVideos, setCurrentVideos] = useState<MarkdownFileWithUrl[] | null>(tag
        ? filterRecordsWithTag(initialVideos ?? [], tag).records
        : initialVideos)
    const [currentPosts, setCurrentPosts] = useState<MarkdownFileWithUrl[] | null>(tag
        ? filterRecordsWithTag(initialPosts ?? [], tag).records
        : initialPosts)

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
                if (tag && allRecords.records.videos) {
                    const getNewVideos = filterRecordsWithTag(allRecords?.records.videos, tag).records.slice(0, page)
                    setCurrentVideos(getNewVideos)

                }
                const getNewVideos = allRecords?.records.videos?.slice(0, page)
                if (getNewVideos && !tag) {
                    setCurrentVideos(getNewVideos)
                }
            }
            if (posts) {
                if (tag && allRecords.records.posts) {
                    const getNewPosts = filterRecordsWithTag(allRecords?.records.posts, tag).records.slice(0, page)
                    setCurrentPosts(getNewPosts)
                }
                const getNewPosts = allRecords?.records.posts?.slice(0, page)
                if (getNewPosts && !tag) {
                    setCurrentPosts(getNewPosts)
                }
            }
        }
    }, [page, allRecords, posts, videos, tag])

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
