import { FunctionComponent } from 'react'

import { StyledTocWrapper } from './TocWrapperStyles'

interface Props {
    tocContents: string
}

const TocWrapper: FunctionComponent<Props> = props => (
    <StyledTocWrapper>
        <h5>Contents</h5>
        {props.tocContents}
    </StyledTocWrapper>
)

export default TocWrapper
