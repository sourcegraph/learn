import React from 'react'

import HeaderCta from './atoms/HeaderCta'

interface Props {
    showCta: boolean
    link?: string
    text?: string
}

const Header: React.FunctionComponent<Props> = props => (
    <>
        <div className="row">
            <img src="/headers/sourcegraph-learn-header.svg" className="w-100 mb-5" alt="Sourcegraph Learn" />
            {props.showCta && <HeaderCta link={props.link} text={props.text} />}
        </div>
    </>
)

export default Header
