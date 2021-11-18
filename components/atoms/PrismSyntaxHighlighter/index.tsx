import CopyToClipboard from '@components/atoms/CopyToClipboard'
import Highlighter from '@components/atoms/Highlighter'
import PrismLibrary from '@languages/index'
import createRandomId from '@util/createRandomId'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import { FunctionComponent, createRef } from 'react'

import { 
    StyledCodeBlock,
    StyledCodeWrapper,
    StyledHighlighterWrapper,
} from './PrismSyntaxHighlighterStyles'

interface Props {
    input: string
    language: Language
    matcher?: string
}

const PrismSyntaxHighlighter: FunctionComponent<Props> = props => {
    const codeReference = createRef<HTMLPreElement>()
    
    return (
        <StyledHighlighterWrapper>
            <Highlight {...defaultProps} Prism={PrismLibrary} theme={theme} code={props.input} language={props.language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <StyledCodeWrapper className={className} style={style} ref={codeReference}>
                    {tokens.map((line, index) => (
                        <StyledCodeBlock key={createRandomId()} {...getLineProps({ line, key: index })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} key={createRandomId()}>
                                {token.content !== ' ' && (
                                    <Highlighter input={token.content} matcher={props.matcher} prismSyntax={true} />
                                )}
                                </span>
                            ))}
                        </StyledCodeBlock>
                    ))}
                </StyledCodeWrapper>
                )}
            </Highlight>
            <CopyToClipboard codeReference={codeReference} />
        </StyledHighlighterWrapper>
    )
}

export default PrismSyntaxHighlighter
