import createRandomId from '@util/createRandomId'
import { FunctionComponent } from 'react'

import { StyledHighlighterMatch } from './HighlighterStyles'

interface Props {
    input: string
    matcher: string
}

const Highlighter: FunctionComponent<Props> = props => {
    let regex = new RegExp('')
    if (props.matcher.includes('repo:')) {
        const [ getQuery ] = props.matcher.split('$').slice(1)
        regex = new RegExp(`(${getQuery.trim()})|(?=${getQuery.trim()}) `, 'gi')
    } else {
        regex = new RegExp(`(${props.matcher})|(?=${props.matcher}) `, 'gi')
    }
    const parts = props.input.split(regex)

    return (
        <div>
            {parts.map(part => (
                regex.test(part)
                    ? <StyledHighlighterMatch key={createRandomId()}>{part}</StyledHighlighterMatch>
                    : <span key={createRandomId()}>{part}</span>
            ))}
        </div>
    )
}

export default Highlighter
