import createRandomId from '@util/createRandomId'
import { FunctionComponent } from 'react'

import { StyledHighlighterMatch } from './HighlighterStyles'

interface Props {
    input: string
    matcher: string
}

const Highlighter: FunctionComponent<Props> = props => {
    const regex = new RegExp(`(${props.matcher})`, 'gi')
    const parts = props.input.split(regex)

    return (
        <div>
            {parts.map(part => (
                part.includes(props.matcher)
                    ? <StyledHighlighterMatch key={createRandomId()}>{part}</StyledHighlighterMatch>
                    : <span key={createRandomId()}>{part}</span>
            ))}
        </div>
    )
}

export default Highlighter
