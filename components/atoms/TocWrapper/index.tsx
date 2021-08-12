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
    const anyHeaders = props.tocContents.map(string => string.includes('Step')).includes(true)

    return (
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
                            <StyledTocItem anyHeaders={anyHeaders} key={createRandomId()}>
                                <Link href={`/${props.slug}/#${sluggify(item)}`}>
                                    <a>{item}</a>
                                </Link>  
                            </StyledTocItem>
                        )
                    )}
                </ul>
        </StyledTocWrapper>
    )
}

export default TocWrapper
