import styled from 'styled-components'

export const StyledCardBody = styled.div`
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1rem;
    min-height: 8.75rem;

    @media screen and (max-width: 768px) {
        min-height: 12.5rem;
    }

    @media screen and (max-width: 576px) {
        min-height: 8.75rem;
    }
`

export const StyledCardTitle = styled.h5`
    font-size: 1.25rem;

    :hover {
        color: var(--text-color);
    }
`
export const StyledCardTagList = styled.p`
    font-size: .875em;
    text-transform: capitalize;
    margin: -.25rem 0 .5rem;
    opacity: .8;
`
export const StyledCardImage = styled.img`
    height: 100%;
    width: 100%;
`
