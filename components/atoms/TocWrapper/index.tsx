import createRandomId from '@util/createRandomId'
import sluggify from '@util/sluggify'
import sluggifyHeaders from '@util/sluggifyHeaders'
import Link from 'next/link'
import React from 'react'

import { 
    StyledTocWrapper,
    StyledNestedTocItem,
    StyledHeaderTocItem,
 } from './TocWrapperStyles'

interface Props {
    tocContents: string[],
    slug: string
}

const TocWrapper: React.FunctionComponent<Props> = props => (
    <StyledTocWrapper>
        <h5>Contents</h5>
            <ul>
                {props.tocContents.map(item =>
                    item.includes('Step')
                    ? (
                        <StyledHeaderTocItem key={createRandomId()}>
                            <Link href={`/${props.slug}/#${sluggifyHeaders(sluggify(item))}`}>
                                <a>{item}</a>
                            </Link>   
                        </StyledHeaderTocItem>
                    )
                    : (
                        <StyledNestedTocItem key={createRandomId()}>
                            <Link href={`/${props.slug}/#${sluggify(item)}`}>
                                <a>{item}</a>
                            </Link>  
                        </StyledNestedTocItem>
                    )
                )}
            </ul>
    </StyledTocWrapper>
)

export default TocWrapper
