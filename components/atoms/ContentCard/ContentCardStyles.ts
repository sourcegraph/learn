import styled from 'styled-components'

export const StyledCardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
`

export const StyledCardTitle = styled.h5`
    font-size: 1.25rem;
`

export const StyledCardLink = styled.a`
    color: #212529;
    text-decoration: none;

    :hover {
        color: #212529;
    }
`
export const StyledCardTagList = styled.p`
    color: #6c757d;
    font-size: .875em;
    text-transform: capitalize;
    margin: -.25rem 0 .5rem;
`
export const StyledCardDescription = styled.p`
    margin: 0;
`
