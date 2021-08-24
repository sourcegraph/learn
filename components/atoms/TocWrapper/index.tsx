import convertHeaders from '@util/convertHeaders'
import createRandomId from '@util/createRandomId'
import sluggify from '@util/sluggify'
import sluggifyHeaders from '@util/sluggifyHeaders'
import useHighlightOnScroll from 'hooks/highlightOnScroll'
import Link from 'next/link'
import { FunctionComponent, useEffect } from 'react'

import { 
    StyledTocWrapper,
    StyledHeaderTocItem,
    StyledTocItem,
 } from './TocWrapperStyles'

interface Props {
    tocContents: string[],
    slug: string
}

const TocWrapper: FunctionComponent<Props> = props => {
    const convertedHeaders = convertHeaders(props.tocContents)
    const highlightHook = useHighlightOnScroll(null)
    useEffect(() => {
        if (props.tocContents) {
            const getElements = Array.from(document.querySelectorAll('h2, h3'))
            highlightHook.setHeaders(getElements)
        }
      }, [props.tocContents, highlightHook]) 

    return (
        <StyledTocWrapper>
            <h5>Contents</h5>
                <ul>
                    {convertedHeaders.map(header =>
                        header.isNested
                        ?  (
                            <StyledTocItem 
                                key={createRandomId()}
                                isHighlighted={highlightHook.activeHeader === `${sluggify(header.header)}`}>
                                <Link href={`/${props.slug}/#${sluggify(header.header)}`}>
                                    <a>{header.header}</a>
                                </Link>  
                            </StyledTocItem>
                        )
                        : (
                            <StyledHeaderTocItem
                                key={createRandomId()}
                                isHighlighted={highlightHook.activeHeader === `${sluggifyHeaders(sluggify(header.header))}`}>
                                <Link href={`/${props.slug}/#${sluggifyHeaders(sluggify(header.header))}`}>
                                    <a>{header.header}</a>
                                </Link>   
                            </StyledHeaderTocItem>
                        )
                    )}
                </ul>
        </StyledTocWrapper>
    )
}

export default TocWrapper
