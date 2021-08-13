import { ReactNode, FunctionComponent } from 'react'

import { StyledButton } from './ButtonStyles'

interface Props {
    className?: string
    href?: string
    children?: ReactNode
    target?: string
    rel?: string
}

const Button: FunctionComponent<Props> = props => (
    <StyledButton
        href={props.href} 
        target={props.target} 
        rel={props.rel}
        className={props.className}>
        {props.children}
    </StyledButton>
)

export default Button
