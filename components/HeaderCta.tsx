import Link from 'next/link'
import React from 'react'

interface Props {
    link?: string
    text?: string
}

const HeaderCta: React.FunctionComponent<Props> = props => (
    <div className="header-cta-wrapper">
        {props.link && <Link href={props.link}>
            <a className="btn header-cta-button">
                {props.text}
            </a>
        </Link>}
    </div>
)

export default HeaderCta
