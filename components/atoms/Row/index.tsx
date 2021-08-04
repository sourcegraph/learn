import React, { ReactNode, FunctionComponent } from 'react'

import { StyledRow } from './RowStyles'

interface Props {
    children?: ReactNode
}

const Row: FunctionComponent<Props> = props => (
    <StyledRow>
        {props.children}
    </StyledRow>
)

export default Row
