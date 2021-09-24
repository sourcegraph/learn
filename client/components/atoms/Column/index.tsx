import { ReactNode, FunctionComponent } from 'react'

import { StyledColumn } from './ColumnStyles'

interface Props {
    children?: ReactNode
    className?: string
}

const Column: FunctionComponent<Props> = props => (
    <StyledColumn className={props.className}>
        {props.children}
    </StyledColumn>
)

export default Column
