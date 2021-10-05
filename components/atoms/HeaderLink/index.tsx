import createRandomId from '@util/createRandomId'
import sluggify from '@util/sluggify'
import sluggifyHeaders from '@util/sluggifyHeaders'
import Link from 'next/link'
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
        <Link href={props.isNested
            ? `/${props.slug}/#${sluggify(props.header)}`
            : `/${props.slug}/#${sluggifyHeaders(sluggify(props.header))}`} passHref={true}>
            <StyledLink>
                {headers.map(header => (
                    header.includes('`')
                        ? <StyledLinkCodeSpan key={createRandomId()}>{' '}{header.replace(backtickRegex, '')}{' '}</StyledLinkCodeSpan>
                        : <StyledLinkSpan key={createRandomId()}>{' '}{header}{' '}</StyledLinkSpan>
                ))}
            </StyledLink>
        </Link>
    )
}

export default HeaderLink
