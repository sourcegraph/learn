import styled from 'styled-components'

export const StyledColumn = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    &.centered {
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    &.medium {
        width: 50%;

        @media screen and (max-width: 768px) {
            width: 100%;
        }
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
        flex: 0 0 auto;
        flex-wrap: wrap;
        min-height: 15.625rem;
        padding: 0 .75rem;
        width: 100%;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            padding: 0;
            max-width: 720px;
            margin-top: 1.88rem;
            min-height: 15.6rem;
        }

        @media screen and (max-width: 576px) {
            max-width: 320px;
        }
    }
`
