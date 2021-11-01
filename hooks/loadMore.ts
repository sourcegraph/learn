import LoadMoreHookObject from '@interfaces/LoadMoreHookObject'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { useEffect, useState } from 'react'

const useLoadMore = (initialRecords: MarkdownFileWithUrl[], initialPage: number): LoadMoreHookObject => {
    const [records, setRecords] = useState<MarkdownFileWithUrl[]>(initialRecords)
    const [page, setPage] = useState<number>(initialPage)
    const [currentRecords, setCurrentRecords] = useState<MarkdownFileWithUrl[]>(records.slice(page, 10))

    useEffect(() => {
        setCurrentRecords(records.slice(0, page))
    }, [page, records])

    return {
        records,
        page,
        setPage,
        currentRecords
    }
}

export default useLoadMore
