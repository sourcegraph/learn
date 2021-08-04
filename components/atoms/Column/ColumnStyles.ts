import styled, { css } from 'styled-components'

interface Props {
    width: string | undefined
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
            case 'flex-small':
                return '25%'
            case 'flex-medium':
                return '50%'
        }
    }

    return '50%'
}

const isFlexMedium = (width: string | undefined): boolean => width === 'flex-medium'

export const StyledColumn = styled.div<Props>`
    display: flex;
    width: ${props => setColumnWidth(props.width)}

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
export const StyledFlexColumn = styled.div<Props>`
    flex: 0 0 auto;
    flex-direction: ${props => isFlexMedium(props.width)
        ? 'column'
        : 'row'};
    width: ${props => setColumnWidth(props.width)};
`
