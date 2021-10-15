import createRandomId from '@util/createRandomId'
import returnHighlightIndices from '@util/returnHighlightIndices'
import toStringSet from '@util/toStringSet'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { FunctionComponent } from 'react'

import { StyledHighlighterMatch, StyledCodeBlock, StyledCodeWrapper } from './HighlighterStyles'

interface Props {
    input: string
    matcher: string
    language: Language
}

const Highlighter: FunctionComponent<Props> = props => {
    const punctuationRegex = new RegExp(/\W/)
    const matcherArrayFiltered = props.matcher.split(/(\W)/).filter(item => item !== '' && item !== ' ')
    const matcherSet = toStringSet(matcherArrayFiltered)
    const getPunctuationIndices = returnHighlightIndices(props.input, props.matcher, matcherSet, punctuationRegex)
    const checkToken = (token: string, index: number, ): boolean => {
        if (!punctuationRegex.test(token) && getPunctuationIndices.has(index)) {
            return true
        } 
        if (punctuationRegex.test(token) && !getPunctuationIndices.has(index)) {
            return false
        }

       return matcherSet.has(token)
    }
    
    return (
        <Highlight {...defaultProps} code={props.input} language={props.language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <StyledCodeWrapper className={className} style={style}>
                    {tokens.map((line, index) => (
                        <StyledCodeBlock key={createRandomId()} {...getLineProps({ line, key: index })}>
                            {line.map((token, key) => (
                                checkToken(token.content, key)
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
