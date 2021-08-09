import styled, { css } from 'styled-components'

interface Props {
    width?: string
}

const setColumnWidth = (width: string | undefined): string => {
    if (width) {
        switch (width) {
            case 'extra-small':
                return '8.33%'
            case 'small':
                return '33.33%'
            case 'medium':
                return '58.33%'
            case 'large':
                return '83.33%'
        }
    }

    return ''
}

export const StyledColumn = styled.div<Props>`
    display: flex;
    width: ${props => setColumnWidth(props.width)}

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    &.flex-small {
        flex: 0 0 auto;
        width: 25%;
    }

    &.flex-medium {
        flex: 0 0 auto;
        flex-direction: column;
        width: 50%;

        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
`
