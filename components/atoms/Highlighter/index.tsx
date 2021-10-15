import createRandomId from '@util/createRandomId'
import toStringSet from '@util/toStringSet'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { FunctionComponent } from 'react'

import { StyledHighlighterMatch, StyledCodeBlock, StyledCodeWrapper } from './HighlighterStyles'

interface Props {
    input: string
    matcher: string
    language: Language
    punctuationIndices: string
}

const Highlighter: FunctionComponent<Props> = props => {
    const punctuationRegex = new RegExp(/\W/)
    const punctuationSet = toStringSet(props.punctuationIndices.split(', '))
    const matcherSet = toStringSet(props.matcher.split(/(\W)/).filter(item => item !== '' && item !== ' '))
    const checkToken = (token: string, index: number): boolean => {
        if (punctuationRegex.test(token) && props.punctuationIndices && punctuationSet.has(index.toString())) {
            return true
        } 
        if (punctuationRegex.test(token) && props.punctuationIndices && !punctuationSet.has(index.toString())) {
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
