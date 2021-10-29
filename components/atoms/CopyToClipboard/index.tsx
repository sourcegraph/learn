import { FunctionComponent, useEffect, useCallback, useState, RefObject } from 'react'

import { 
    StyledCopyMessage,
    StyledCopyContainer,
    StyledCopyButtonContainer,
    StyledCopyButton,
    StyledCopyIcon
} from './CopyToClipboardStyles'

interface Props {
    codeReference: RefObject<HTMLPreElement>
}

const CopyToClipboard: FunctionComponent<Props> = props => {
    const [showIcon, setShowIcon] = useState<boolean>(false)

    useEffect(() => {
        if (showIcon) {
            setTimeout(() => {
                setShowIcon(false)
            }, 1500)
        }
    }, [showIcon])

    const copy = useCallback( async () => {
        if (props.codeReference.current?.textContent && !showIcon) {
            await navigator.clipboard
                .writeText(props.codeReference.current.textContent.trim())
                .then(() => setShowIcon(true))
                .catch()
        }
        console.log('copy triggered')
    }, [props.codeReference, showIcon])

    return (
        <StyledCopyContainer>
            <StyledCopyButtonContainer>
                <StyledCopyButton onClick={copy} type="button">
                    {showIcon ? 
                    (
                        <StyledCopyMessage>Copied!</StyledCopyMessage>
                    ) :
                    (
                        <StyledCopyIcon />
                    )}
                </StyledCopyButton>
            </StyledCopyButtonContainer>
        </StyledCopyContainer>
    )
}

export default CopyToClipboard
