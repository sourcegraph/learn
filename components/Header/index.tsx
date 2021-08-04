import React from 'react'

import HeaderCta from '../atoms/HeaderCta'

import { StyledHeaderImage } from './HeaderStyles'

interface Props {
    showCta: boolean
    link?: string
    text?: string
}

const Header: React.FunctionComponent<Props> = props => (
    <>
        <div className="flex-row">
            <StyledHeaderImage src="/headers/sourcegraph-learn-header.svg" alt="Sourcegraph Learn" />
            {props.showCta && <HeaderCta link={props.link} text={props.text} />}
        </div>
    </>
)

export default Header
