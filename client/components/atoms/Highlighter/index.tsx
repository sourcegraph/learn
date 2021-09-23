import createRandomId from '@util/createRandomId'
import { FunctionComponent } from 'react'

import { StyledHighlighterMatch } from './HighlighterStyles'

interface Props {
    input: string
    matcher: string
    patternType: string
}

const Highlighter: FunctionComponent<Props> = props => {
    let regex = new RegExp('')
    if (props.matcher.includes('repo:')) {
        const getQuery = props.matcher.split(' ').slice(1, props.matcher.split(' ').length).join(' ')
        regex = new RegExp(`(${getQuery.trim()})|(?=${getQuery.trim()})`, 'gi')
    } else if (props.matcher.includes('and')) {
        const getQueries = props.matcher.split('and')
        regex = new RegExp(`(${getQueries[0].trim()})|(?=${getQueries[0].trim()})|(${getQueries[1].trim()})|(?=${getQueries[1].trim()})`, 'gi')
    } else {
        regex = new RegExp(`(${props.matcher})|(?=${props.matcher})`, 'gi')
    }
    const parts = props.input.split(regex)

    return (
        <div>
            {props.patternType === 'literal' ?
                (parts.map(part => (
                        regex.test(part)
                            ? <StyledHighlighterMatch key={createRandomId()}>{part}</StyledHighlighterMatch>
                            : <span key={createRandomId()}>{part}</span>
                )))
                : (
                    <StyledHighlighterMatch>{props.input}</StyledHighlighterMatch>
                )
            }
 
        </div>
    )
}

export default Highlighter
