import MarkdownFile from '@interfaces/MarkdownFile'
import { FunctionComponent } from 'react'

import {
    StyledCollectionNextCallout,
    StyledCollectionNextLink,
    StyledCollectionNextCard,
 } from './CollectionLinkStyles'

interface Props {
    members: MarkdownFile[]
    isDark?: boolean
}

const CollectionLink: FunctionComponent<Props> = props => (
    <StyledCollectionNextCard>
        <StyledCollectionNextCallout>
            <StyledCollectionNextLink>
                
            </StyledCollectionNextLink>
        </StyledCollectionNextCallout>
    </StyledCollectionNextCard>

)

export default CollectionLink
