import React, { ReactNode, FunctionComponent } from 'react'

import { StyledContainer } from './ContainerStyles'

interface Props {
    children?: ReactNode
}

const Container: FunctionComponent<Props> = props => (
    <StyledContainer>
        {props.children}
    </StyledContainer>
)

export default Container
