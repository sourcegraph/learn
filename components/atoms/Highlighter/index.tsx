import createRandomId from '@util/createRandomId'
import { FunctionComponent } from 'react'

import { StyledHighlighterMatch } from './HighlighterStyles'

interface Props {
    input: string
    matcher: string
}

const Highlighter: FunctionComponent<Props> = props => {
    const regex = new RegExp(`(${props.matcher})|(?=${props.matcher})`, 'gi')
    const parts = props.input.split(regex)

    return (
        <pre>
            <code>
                {parts.map(part => (
                    regex.test(part)
                        ? <StyledHighlighterMatch key={createRandomId()}>{part}</StyledHighlighterMatch>
                        : <span key={createRandomId()}>{part}</span>
                ))}
            </code>
        </pre>
    )
}

export default Highlighter
