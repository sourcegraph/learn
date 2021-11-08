import styled from 'styled-components'

export const StyledCardBody = styled.div`
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
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
    height: auto;
    width: 100%;
`
