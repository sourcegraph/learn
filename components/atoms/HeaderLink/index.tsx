import createRandomId from '@util/createRandomId'
import sluggify from '@util/sluggify'
import sluggifyHeaders from '@util/sluggifyHeaders'
import { FunctionComponent } from 'react'

import { StyledLink, StyledLinkSpan, StyledLinkCodeSpan } from './HeaderLinkStyles'

interface Props {
    header: string
    slug: string
    isNested: boolean
}

const HeaderLink: FunctionComponent<Props> = props => {
    const headers = props.header.split(' ')
    const backtickRegex = /`/gi

    return (
        <a href={props.isNested
            ? `#${sluggify(props.header)}`
            : `#${sluggifyHeaders(sluggify(props.header))}`}>
            <StyledLink>
                {headers.map(header => (
                    header.includes('`')
                        ? <StyledLinkCodeSpan key={createRandomId()}>{' '}{header.replace(backtickRegex, '')}</StyledLinkCodeSpan>
                        : <StyledLinkSpan key={createRandomId()}>{' '}{header}{' '}</StyledLinkSpan>
                ))}
            </StyledLink>
        </a>
    )
}

export default HeaderLink
