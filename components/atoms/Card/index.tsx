import React, { ReactNode, FunctionComponent } from 'react'

import { StyledCard } from './CardStyles'

interface Props {
    children?: ReactNode
    addMargin?: boolean | undefined
    showBorder?: boolean | undefined
}

const Card: FunctionComponent<Props> = props => (
    <StyledCard addMargin={props.addMargin} showBorder={props.showBorder}>
        {props.children}
    </StyledCard>
)

export default Card
