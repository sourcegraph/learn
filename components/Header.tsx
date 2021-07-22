import React from 'react'

import HeaderCta from './HeaderCta'

interface Props {
    showCta: boolean
    link?: string
    text?: string
}

const Header: React.FunctionComponent<Props> = props => (
    <>
        <div className="row">
            <img src="/headers/sourcegraph-learn-header.svg" className="w-100 mb-3" />
            {props.showCta && <HeaderCta link={props.link} text={props.text} />}
        </div>
    </>
)

export default Header
