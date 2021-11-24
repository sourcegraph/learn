import createRandomId from '@util/createRandomId'
import { FunctionComponent } from 'react'

import {
    StyledCodeBlock,
    StyledHighlighterMatch,
    StyledCodeWrapper,
    StyledNonHighlighterMatch,
} from './HighlighterStyles'

interface Props {
    input: string
    prismSyntax?: boolean
    matcher?: string
}

const Highlighter: FunctionComponent<Props> = props => {
    let parts: string[] = [ props.input ]
    let regex = new RegExp('')
    if (props.matcher) {
        let matcherString = ''
        props.matcher.split(',').map(part => {
            matcherString = matcherString.concat('|', `(${part.trim()})|(?=${part.trim()})`)
            matcherString = matcherString.replace(/^\|/, '')
            regex = new RegExp(`${matcherString}`, 'gi')
            parts = props.input.split(regex)
        })
    }
    const hasHighlighting = parts.length > 1

    return (
        <StyledCodeWrapper>
            <StyledCodeBlock isPrism={props.prismSyntax}>
                {props.prismSyntax && hasHighlighting && (
                    parts.map((part: string) => (
                        regex.test(part)
                            ? <StyledHighlighterMatch key={createRandomId()}>{part}</StyledHighlighterMatch>
                            : <span key={createRandomId()}>{part}</span>
                    ))
                )}
                {props.prismSyntax && !hasHighlighting && (
                    <span>{parts}</span>
                )}
                {!props.prismSyntax && hasHighlighting && (
                    parts.map((part: string) => (
                        regex.test(part)
                            ? <StyledHighlighterMatch key={createRandomId()}>{part}</StyledHighlighterMatch>
                            : <StyledNonHighlighterMatch key={createRandomId()}>{part}</StyledNonHighlighterMatch>
                    ))
                )}
                {!props.prismSyntax && !hasHighlighting && (
                    <StyledNonHighlighterMatch>{parts}</StyledNonHighlighterMatch>
                )}
            </StyledCodeBlock>
        </StyledCodeWrapper>
    )
}

export default Highlighter
