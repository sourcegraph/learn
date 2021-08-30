import { ReactNode, forwardRef } from 'react'

import { StyledCard } from './CardStyles'

interface Props {
    children?: ReactNode
    addMargin?: boolean
    showBorder?: boolean
    leftAlign?: boolean
    href?: string
}

const Card = forwardRef<HTMLAnchorElement, Props>((props, reference) => (
    <StyledCard
        href={props.href}
        addMargin={props.addMargin} 
        showBorder={props.showBorder}
        leftAlign={props.leftAlign}
        ref={reference}>
        {props.children}
    </StyledCard>
))

export default Card
