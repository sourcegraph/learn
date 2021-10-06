import HeaderLink from '@components/atoms/HeaderLink'
import useHighlightOnScroll from '@hooks/highlightOnScroll'
import useRepositionOnScroll from '@hooks/repositionOnScroll'
import convertHeaders from '@util/convertHeaders'
import createRandomId from '@util/createRandomId'
import sluggify from '@util/sluggify'
import sluggifyHeaders from '@util/sluggifyHeaders'
import { FunctionComponent, useEffect, useState } from 'react'

import { 
    StyledTocWrapperBody,
    StyledTocWrapper,
    StyledTocTopWrapper,
    StyledHeaderTocItem,
    StyledTocItem,
 } from './TocWrapperStyles'

interface Props {
    tocContents: string[]
    slug: string
}

const TocWrapper: FunctionComponent<Props> = props => {
    const [headers, setHeaders] = useState<Element[] | null>(null)
    const [element, setElement] = useState<Element | null>(null)
    const convertedHeaders = convertHeaders(props.tocContents)
    const highlightHook = useHighlightOnScroll(headers)
    const repositionHook = useRepositionOnScroll(element)
    useEffect(() => {
        if (props.tocContents) {
            const getHeaders = [].slice.call(document.querySelectorAll('h2, h3'))
            const getNav = document.querySelector('#nav')
            setHeaders(getHeaders)
            setElement(getNav)
        }
    }, [props.tocContents])

    useEffect(() => {
        if (headers) {
            highlightHook.setHeaders(headers)
        }
    }, [headers, highlightHook])

    useEffect(() => {
        if (element) {
            repositionHook.setElement(element)
        }
    }, [element, repositionHook])

    return (
        <StyledTocTopWrapper>
            <StyledTocWrapper>
                <StyledTocWrapperBody setTop={repositionHook.reposition}>
                    <h5>Contents</h5>
                        <ul>
                            {convertedHeaders.map(header =>
                                header.isNested
                                ?  (
                                    <StyledTocItem 
                                        key={createRandomId()}
                                        isHighlighted={highlightHook.activeHeader === `${sluggify(header.header)}`}>
                                        <HeaderLink
                                            slug={props.slug}
                                            header={header.header}
                                            isNested={header.isNested}/>
                                    </StyledTocItem>
                                )
                                : (
                                    <StyledHeaderTocItem
                                        key={createRandomId()}
                                        isHighlighted={highlightHook.activeHeader === `${sluggifyHeaders(sluggify(header.header))}`}>
                                        <HeaderLink
                                            slug={props.slug}
                                            header={header.header}
                                            isNested={header.isNested}/>
                                    </StyledHeaderTocItem>
                                )
                            )}
                        </ul>
                </StyledTocWrapperBody>
            </StyledTocWrapper>
        </StyledTocTopWrapper>
    )
}

export default TocWrapper
