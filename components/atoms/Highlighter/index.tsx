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
    let parts: string | string[] = props.input
    let regex = new RegExp('')
    if (props.matcher) {
        regex = new RegExp(`(${props.matcher})|(?=${props.matcher})`, 'gi')
        parts = props.input.split(regex)
    }

    return (
        <StyledCodeWrapper>
            <StyledCodeBlock>
                {props.prismSyntax && typeof parts !== 'string' && (
                    parts.map(part => (
                        regex.test(part)
                            ? <StyledHighlighterMatch key={createRandomId()}>{part}</StyledHighlighterMatch>
                            : <span key={createRandomId()}>{part}</span>
                    ))
                )}
                {props.prismSyntax && typeof parts === 'string' && (
                    <span>{parts}</span>
                )}
                {!props.prismSyntax && typeof parts !== 'string' && (
                    parts.map(part => (
                        regex.test(part)
                            ? <StyledHighlighterMatch key={createRandomId()}>{part}</StyledHighlighterMatch>
                            : <StyledNonHighlighterMatch key={createRandomId()}>{part}</StyledNonHighlighterMatch>
                    ))
                )}
                {!props.prismSyntax && typeof parts === 'string' && (
                    <StyledNonHighlighterMatch>{parts}</StyledNonHighlighterMatch>
                )}
            </StyledCodeBlock>
        </StyledCodeWrapper>
    )
}

export default Highlighter
