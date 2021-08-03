import styled from 'styled-components'

interface Props {
    addMargin: boolean | undefined
    showBorder: boolean | undefined
}

export const StyledCard = styled.div<Props>`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background-color: #fff;
    background-clip: border-box;
    border: ${props => props.showBorder
        ? '1px solid rgba(0,0,0,.125)'
        : ''};
    border-radius: .25rem;
    margin: ${props => props.addMargin
        ? '3rem 0'
        : '0 0 1.5rem 0'};
    word-wrap: break-word;
`
