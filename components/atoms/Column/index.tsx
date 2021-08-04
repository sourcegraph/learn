import React, { ReactNode, FunctionComponent } from 'react'

import { StyledColumn, StyledFlexColumn } from './ColumnStyles'

interface Props {
    children?: ReactNode
    width?: string | undefined
    flex?: boolean | undefined
}

const Column: FunctionComponent<Props> = props => props.flex
    ? (
        <StyledFlexColumn width={props.width}>
            {props.children}
        </StyledFlexColumn>
    )
    : (
        <StyledColumn width={props.width}>
            {props.children}
        </StyledColumn> 
    )      

export default Column
