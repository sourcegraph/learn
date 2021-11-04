import createRandomId from '@util/createRandomId'
import { FunctionComponent } from 'react'

import { StyledCodeBlock, StyledHighlighterMatch, StyledCodeWrapper } from './OutputHighlighterStyles'

interface Props {
    input: string
    matcher?: string
}

const OutputHighlighter: FunctionComponent<Props> = props => {
    let parts: string | string[] = props.input
    let regex = new RegExp('')
    if (props.matcher) {
        regex = new RegExp(`(${props.matcher})|(?=${props.matcher})`, 'gi')
        parts = props.input.split(regex)
    }

    return (
        <StyledCodeWrapper>
            <StyledCodeBlock>
                {typeof parts === 'string' ?
                (
                    <span>{parts}</span>
                ) :
                (
                    parts.map(part => (
                        regex.test(part)
                            ? <StyledHighlighterMatch key={createRandomId()}>{part}</StyledHighlighterMatch>
                            : <span key={createRandomId()}>{part}</span>
                    ))
                )}
            </StyledCodeBlock>
        </StyledCodeWrapper>
    )
}

export default OutputHighlighter
