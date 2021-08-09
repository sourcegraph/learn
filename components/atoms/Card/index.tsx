import React, { ReactNode, FunctionComponent } from 'react'

import { StyledCard } from './CardStyles'

interface Props {
    children?: ReactNode
    addMargin?: boolean
    showBorder?: boolean
    leftAlign?: boolean
}

const Card: FunctionComponent<Props> = props => (
    <StyledCard
        addMargin={props.addMargin} 
        showBorder={props.showBorder}
        leftAlign={props.leftAlign}>
        {props.children}
    </StyledCard>
)

export default Card
