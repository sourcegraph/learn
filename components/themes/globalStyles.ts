import { createGlobalStyle } from 'styled-components'

interface Props {
    text: string
    background: string
}

export const GlobalStyles = createGlobalStyle<Props>`
    body {
        font-family: "Open Sans","Arial","Helvetica",sans-serif;
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: .015rem;
        line-height: 1.5;
        color: ${props => props.text};
        background-color: ${props => props.background};
        transition: all .3s linear;
    }
`
