import React, { ReactNode, FunctionComponent } from 'react'

import { StyledColumn } from './ColumnStyles'

interface Props {
    children?: ReactNode
    width?: string | undefined
    className?: string | undefined
}

const Column: FunctionComponent<Props> = props => (
    <StyledColumn width={props.width} className={props.className}>
        {props.children}
    </StyledColumn>
)

export default Column
