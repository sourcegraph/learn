import styled from 'styled-components'

export const StyledAuthorHeader = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0 4rem;

    @media screen and (max-width: 1023px) {
        padding: 1rem 0;
    }
`
export const StyledAuthorName = styled.h5`
   font-size: 26px;
`
export const StyledAuthorBio = styled.p`
    text-align: center;
`
export const StyledAuthorSocialLink = styled.a`
    color: #5033e1;
    margin: 0 .25rem;

    :hover {
        color: var(--text-color);
    }
`
export const StyledAuthorSocialLinksContainer = styled.div`
    display: flex;
`
