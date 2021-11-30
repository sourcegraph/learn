import styled from 'styled-components'

interface Props {
    isPrism?: boolean
}

export const StyledCodeBlock = styled.div<Props>`
    background-color: #e7e7e7;
    padding: ${props => props.isPrism
        ? ''
        : '1rem'};
`
export const StyledCodeWrapper = styled.pre<Props>`
    background-color: #e7e7e7 !important;
    margin: 0;
    border-radius: ${props => props.isPrism
        ? '0 !important'
        : '.625rem'};
`
export const StyledHighlighterMatch = styled.mark`
    background-color: #ffdb45 !important;
    color: #000 !important;
`
export const StyledNonHighlighterMatch = styled.span`
    color: #000;
`
