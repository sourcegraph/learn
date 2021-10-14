import createRandomId from '@util/createRandomId'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { FunctionComponent } from 'react'

import { StyledHighlighterMatch, StyledCodeBlock, StyledCodeWrapper } from './HighlighterStyles'

interface Props {
    input: string
    matcher: string
    language: Language
}

// From https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/types.js
interface Token {
    types: string[];
    content: string;
    empty?: boolean;
}

const Highlighter: FunctionComponent<Props> = props => {
    const matcherSet = new Map()
    const matcherArray = props.matcher.split(/(\W)/).filter(item => item !== '' && item !== ' ')
    matcherArray.map(item => {
        if (matcherSet.get(item)) {
            let count: number = matcherSet.get(item)
            matcherSet.set(item, count += 1)
        } else if (!matcherSet.get(item)) {
            matcherSet.set(item, 1)
        }
    })
    const tokenCounter = new Map()
    const topCounter = Math.max(...Object.values(matcherSet))
    const checkInObject = (term: string, line: Token[][]): boolean => {
        const arrayFromLine = line[0].map(item => item.content)
        if (term === ' ') {
            return false
        }
        if (matcherSet.get(term) && !tokenCounter.get(term)) {
            tokenCounter.set(term, 1)
        } else if (matcherSet.get(term) && tokenCounter.get(term) && tokenCounter.get(term) > topCounter) {
            return false
        } else if (matcherSet.get(term) && tokenCounter.get(term) && tokenCounter.get(term) <= topCounter) {
            let counter: number = tokenCounter.get(term)
            tokenCounter.set(term, counter += 1)
        } 

        if (matcherSet.get(term) && tokenCounter.get(term) && (matcherSet.get(arrayFromLine[arrayFromLine.indexOf(term) + 1])) && (tokenCounter.get(term) >= 1 || tokenCounter.get(term) <= topCounter)) {
            return true
        }

        return false 
    }
    
    return (
        <Highlight {...defaultProps} code={props.input} language={props.language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <StyledCodeWrapper className={className} style={style}>
                    {tokens.map((line, index) => (
                        <StyledCodeBlock key={createRandomId()} {...getLineProps({ line, key: index })}>
                            {line.map((token, key) => (
                                checkInObject(token.content, tokens)
                                    ? (<StyledHighlighterMatch key={createRandomId()} {...getTokenProps({ token, key })} />)
                                    : (<span key={createRandomId()} {...getTokenProps({ token, key })} />)
                            ))}
                        </StyledCodeBlock>
                    ))}
                </StyledCodeWrapper>
            )}
        </Highlight>
    )
}

export default Highlighter
