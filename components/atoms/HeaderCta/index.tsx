import React from 'react'

import Button from '../Button'

import { StyledHeaderCtaWrapper } from './HeaderCtaStyles'

interface Props {
    link?: string
    text?: string
}

const HeaderCta: React.FunctionComponent<Props> = props => (
    <StyledHeaderCtaWrapper>
        {props.link && 
            <Button href={props.link} className="header-cta">
                {props.text}
            </Button>}
    </StyledHeaderCtaWrapper>
)

export default HeaderCta
