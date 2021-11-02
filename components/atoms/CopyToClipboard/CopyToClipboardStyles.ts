import ContentCopyIcon from 'mdi-react/ContentCopyIcon'
import styled from 'styled-components'

export const StyledCopyMessage = styled.span`
    color: #a112ff;
`
export const StyledCopyContainer = styled.div`
    align-items: center;
    display: flex;
    position: absolute;
    top: 4px;
    right: 0;
`
export const StyledCopyButtonContainer = styled.div`
    position: relative;
`
export const StyledCopyButton = styled.button`
    border-color: transparent;
    background-color: transparent;
    cursor: pointer;
`
export const StyledCopyIcon = styled(ContentCopyIcon)`
    :hover {
        color: #3826cc;
    }
`
