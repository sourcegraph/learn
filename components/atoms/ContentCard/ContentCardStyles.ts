import styled from 'styled-components'

export const StyledCardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
`

export const StyledCardTitle = styled.h5`
    font-size: 1.25rem;
    color: #212529;

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
export const StyledCardImage = styled.img`
    height: auto;
    width: 100%;
`
