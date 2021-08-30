import styled from 'styled-components'

export const StyledColumn = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    &.medium {
        width: 50%;
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

    &.flex-large {
        align-items: center;
        min-height: 21.88rem;
        padding: 0 .75rem;
        width: 100%;
    }
`
