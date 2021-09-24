import { ReactNode, FunctionComponent } from 'react'

import { StyledRow } from './RowStyles'

interface Props {
    children?: ReactNode
    className?: string
}

const Row: FunctionComponent<Props> = props => (
    <StyledRow className={props.className}>
        {props.children}
    </StyledRow>
)

export default Row
