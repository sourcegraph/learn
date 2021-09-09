import styled from 'styled-components'

export const StyledContainer = styled.div`
    width: 100%;
    padding: 0 .75rem;
    margin: 0 auto;

    @media screen and (min-width: 1400px) {
        max-width: 1320px;
    }

    @media screen and (max-width: 768px) {
        padding: 0 .75rem;
        max-width: 720px;
    }

    @media screen and (max-width: 576px) {
        max-width: 320px;
        padding: 0;
    }
`
