import convertHeaders from '@util/convertHeaders'
import createRandomId from '@util/createRandomId'
import sluggify from '@util/sluggify'
import sluggifyHeaders from '@util/sluggifyHeaders'
import Link from 'next/link'
import { FunctionComponent } from 'react'

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

    return (
        <StyledTocWrapper>
            <h5>Contents</h5>
                <ul>
                    {convertedHeaders.map(header =>
                        header.isNested
                        ?  (
                            <StyledTocItem key={createRandomId()}>
                                <Link href={`/${props.slug}/#${sluggify(header.header)}`}>
                                    <a>{header.header}</a>
                                </Link>  
                            </StyledTocItem>
                        )
                        : (
                            <StyledHeaderTocItem key={createRandomId()}>
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
