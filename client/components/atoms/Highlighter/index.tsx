import createRandomId from '@util/createRandomId'
import highlighterTypes from '@util/highlighterTypes'
import { FunctionComponent } from 'react'

import { StyledHighlighterMatch } from './HighlighterStyles'

interface Props {
    input: string
    matcher: string
    patternType: string
}

const Highlighter: FunctionComponent<Props> = props => {
    let regex = new RegExp('')
    const type = highlighterTypes(props.matcher, props.patternType)
    switch (type) {
        case 'filters': {
            const getQuery = props.matcher.split(' ').filter(element => !element.includes(':')).join(' ')
            regex = new RegExp(`(${getQuery.trim()})|(?=${getQuery.trim()})`, 'gi')
            break
        }
        case 'andCondition': {
            const getQuery = props.matcher.split('and')
            regex = new RegExp(`(${getQuery[0].trim()})|(?=${getQuery[0].trim()})|(${getQuery[1].trim()})|(?=${getQuery[1].trim()})`, 'gi')
            break
        }
        case 'regexpMultiples': {
            const getQuery = props.matcher.replace(' ', '|')
            regex = new RegExp(`(${getQuery.trim()})|(?=${getQuery.trim()})`, 'gi')
            break
        }
        case 'regexpMatchingGroup': {
            const matchRegex = new RegExp(props.matcher, 'gi')
            const getMatch = props.input.match(matchRegex)?.join('') ?? props.matcher
            regex = new RegExp(`(${getMatch.trim()})|(?=${getMatch.trim()})`, 'gi')
            break
        }
        case 'none':
            regex = new RegExp(`(${props.matcher})|(?=${props.matcher})`, 'gi')
            break
        default:
            regex = new RegExp(`(${props.matcher})|(?=${props.matcher})`, 'gi')
    }
    const parts = props.input.split(regex)

    return (
        <div>
            {props.patternType === 'literal' || props.patternType === 'regexp' ?
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
