import CopyToClipboard from '@components/atoms/CopyToClipboard'
import OutputHighlighter from '@components/atoms/OutputHighlighter'
import PrismLibrary from '@languages/index'
import createRandomId from '@util/createRandomId'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import { FunctionComponent, createRef } from 'react'

import { 
    StyledCodeBlock,
    StyledCodeWrapper,
    StyledHighlighterWrapper,
} from './HighlighterStyles'

interface Props {
    input: string
    language: Language
    matcher?: string
}

const Highlighter: FunctionComponent<Props> = props => {
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
                                    <OutputHighlighter input={token.content} matcher={props.matcher} />
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

export default Highlighter
