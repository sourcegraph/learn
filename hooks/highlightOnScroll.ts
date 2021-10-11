import HighlightHookObject from '@interfaces/HighlightHookObject'
import { useEffect, useState } from 'react'

const useHighlightOnScroll = (initialHeaders: Element[] | null): HighlightHookObject => {
    const [activeScrollHeader, setActiveScrollHeader ] = useState<string | null>(null)
    const [clickedHeader, setClickedHeader] = useState<string | null>(null)
    const [headers, setHeaders] = useState<Element[] | null>(initialHeaders)

    const highlightOnScroll = (entries:IntersectionObserverEntry[]): void => {
        entries.map(entry => {
            if (entry.boundingClientRect.top < 1) {
                setActiveScrollHeader(entry.target.id)
                setClickedHeader(null)
            }
        })
    }

    useEffect(() => {
        const options = {
            threshold: [0]
        }
        const observer = new IntersectionObserver(highlightOnScroll, options)
        headers?.map(header => {
            observer.observe(header)
        })

        return () => {
            headers?.map(header => {
                observer.unobserve(header)
            })
        }
    }, [headers, clickedHeader])

    return {
        activeScrollHeader,
        setActiveScrollHeader,
        clickedHeader,
        setClickedHeader,
        headers,
        setHeaders,
    }
}

export default useHighlightOnScroll
