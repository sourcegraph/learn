import React, { ReactNode, FunctionComponent } from 'react'

import { StyledColumn } from './ColumnStyles'

interface Props {
    children?: ReactNode
    width?: string
    className?: string
}

const Column: FunctionComponent<Props> = props => (
    <StyledColumn width={props.width} className={props.className}>
        {props.children}
    </StyledColumn>
)

export default Column
