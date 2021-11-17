import styled from 'styled-components'

interface Props {
    addMargin?: boolean
    showBorder?: boolean
    leftAlign?: boolean
    width?: string
}

export const StyledCard = styled.div<Props>`
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background-color: var(--background-color);
    background-clip: border-box;
    border: ${props => props.showBorder
        ? '1px solid rgba(0, 0, 0, 0.125)'
        : ''};
    border-radius: .25rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    margin: ${props => props.addMargin
        ? '1.5rem 0'
        : '0'};
    text-align: ${props => props.leftAlign
        ? 'left'
        : 'center'};
    text-decoration: none;
    word-wrap: break-word;
    width: ${props => props.width
        ? `${props.width}%`
        : '100%'};
`
