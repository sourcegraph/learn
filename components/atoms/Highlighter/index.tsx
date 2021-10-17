import createRandomId from '@util/createRandomId'
import returnHighlightIndices from '@util/returnHighlightIndices'
import toStringSet from '@util/toStringSet'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import { FunctionComponent } from 'react'

import { StyledHighlighterMatch, StyledCodeBlock, StyledCodeWrapper } from './HighlighterStyles'

interface Props {
    input: string
    matcher?: string
    language: Language
}

const Highlighter: FunctionComponent<Props> = props => {
    const checkToken = (token: string, index: number): boolean => {
        if (!props.matcher) {
            return false
        }
        const punctuationRegex = new RegExp(/[^\w".]/)
        const matcherArrayFiltered = props.matcher.split(/([^\w".])/)
        const matcherSet = toStringSet(matcherArrayFiltered)
        const getPunctuationIndices = returnHighlightIndices(props.input, props.matcher, matcherSet, punctuationRegex)
        if (!punctuationRegex.test(token) && getPunctuationIndices.has(index)) {
            return true
        } 
        if (punctuationRegex.test(token) && !getPunctuationIndices.has(index)) {
            return false
        }

       return matcherSet.has(token)
    }
    
    return (
        <Highlight {...defaultProps} theme={theme} code={props.input} language={props.language}>
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
