import MarkdownFile from '@interfaces/MarkdownFile'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'
import { FunctionComponent } from 'react'

import {
    StyledCollectionNextCallout,
    StyledCollectionNextLink,
    StyledCollectionNextCard,
 } from './CollectionLinkStyles'

interface Props {
    members: MarkdownFile[]
    isDark?: boolean
    activeSlug: string
}

const CollectionLink: FunctionComponent<Props> = props => {
    const currentIndex = props.members.findIndex(record => record.slug === props.activeSlug)
    const nextRecord = props.members[currentIndex + 1] ?? null

    return (
        <>
            {nextRecord && (
                <StyledCollectionNextCard>
                    <StyledCollectionNextCallout>
                        Next in series
                        <ChevronRightIcon />
                    </StyledCollectionNextCallout>
                    <Link href={nextRecord.slug} passHref={true}>
                        <StyledCollectionNextLink key={nextRecord.slug}>
                            {nextRecord.frontMatter.title}
                        </StyledCollectionNextLink>
                    </Link>  
                </StyledCollectionNextCard>
            )} 
        </>
    )
}

export default CollectionLink
