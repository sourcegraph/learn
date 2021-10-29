import CopyToClipboard from '@components/atoms/CopyToClipboard'
import PrismLibrary from '@languages/index'
import createRandomId from '@util/createRandomId'
import returnHighlightIndices from '@util/returnHighlightIndices'
import toStringSet from '@util/toStringSet'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import { FunctionComponent, createRef } from 'react'

import { 
    StyledHighlighterMatch,
    StyledCodeBlock,
    StyledCodeWrapper,
    StyledHighlighterWrapper 
} from './HighlighterStyles'

interface Props {
    input: string
    language: Language
    matcher?: string
    output?: string
}

const Highlighter: FunctionComponent<Props> = props => {
    const codeReference = createRef<HTMLPreElement>()
    const checkToken = (index: number): boolean => {
        if (!props.matcher) {
            return false
        }
        const matcherArrayFiltered = props.matcher.split(/([^\w".])/)
        const matcherSet = toStringSet(matcherArrayFiltered)
        const getPunctuationIndices = returnHighlightIndices(props.input, props.matcher, matcherSet)
        return getPunctuationIndices.has(index)
    }
    
    return (
        <StyledHighlighterWrapper>
            <Highlight {...defaultProps} Prism={PrismLibrary} theme={theme} code={props.input} language={props.language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <StyledCodeWrapper className={className} style={style} ref={codeReference}>
                        {tokens.map((line, index) => (
                            <StyledCodeBlock key={createRandomId()} {...getLineProps({ line, key: index })}>
                                {line.map((token, key) => (
                                    checkToken(key)
                                        ? (<StyledHighlighterMatch key={createRandomId()} {...getTokenProps({ token, key })} />)
                                        : (<span key={createRandomId()} {...getTokenProps({ token, key })} />)
                                ))}
                            </StyledCodeBlock>
                        ))}
                    </StyledCodeWrapper>
                )}
            </Highlight>
            {props.output !== 'true' && (
                <CopyToClipboard codeReference={codeReference} />
            )}
        </StyledHighlighterWrapper>
    )
}

export default Highlighter
