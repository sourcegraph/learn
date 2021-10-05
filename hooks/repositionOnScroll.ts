import PositionHookObject from '@interfaces/PositionHookObject'
import { useEffect, useState } from 'react'

const useRepositionOnScroll = (initialElement: Element | null): PositionHookObject => {
    const [element, setElement] = useState(initialElement)
    const [reposition, setReposition] = useState(false)

    const repositionOnScroll = (entries:IntersectionObserverEntry[]): void => {
       
        entries.map(entry => {
            if (!entry.isIntersecting) {
                setReposition(true)
            }
            
            if (entry.isIntersecting) {
                setReposition(false)
            }
        })
    }

    useEffect(() => {
        const options = {
            threshold: [0]
        }
        const observer = new IntersectionObserver(repositionOnScroll, options)      
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }      
        }
    }, [element])

    return {
        element,
        setElement,
        reposition,
    }
}

export default useRepositionOnScroll
