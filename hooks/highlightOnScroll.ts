import HighlightHookObject from '@interfaces/HighlightHookObject'
import { useEffect, useState } from 'react'

const useHighlightOnScroll = (initialHeaders: Element[] | null): HighlightHookObject => {
    const [activeHeader, setActiveHeader ] = useState('')
    const [headers, setHeaders] = useState(initialHeaders)

    const highlightOnScroll = (entries:IntersectionObserverEntry[]): void => {
        entries.map(entry => {
            if (entry.boundingClientRect.top < 1) {
                setActiveHeader(entry.target.id)
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
    }, [headers])

    return {
        activeHeader,
        setActiveHeader,
        headers,
        setHeaders,
    }
}

export default useHighlightOnScroll
