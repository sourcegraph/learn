import Link from 'next/link'
import React from 'react'

import Button from '../Button'

import { StyledHeaderCtaWrapper } from './HeaderCtaStyles'

interface Props {
    link?: string
    text?: string
}

const HeaderCta: React.FunctionComponent<Props> = props => (
    <StyledHeaderCtaWrapper>
        {props.link && <Link href={props.link}>
            <Button className="header-cta">
                {props.text}
            </Button>
        </Link>}
    </StyledHeaderCtaWrapper>
)

export default HeaderCta
