import styled from 'styled-components'

export const StyledRow = styled.div`
    align-items: start;
    display: flex;
    flex-wrap: wrap;

    &.medium {
        padding: 3rem .75rem;

        @media screen and (max-width: 768px) {
            width: 100%;
            flex-direction: column;
            padding: 0;
            max-width: 720px;
        }

        @media screen and (max-width: 576px) {
            max-width: 320px;
        }
    }
`
