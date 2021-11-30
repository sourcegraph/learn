import styled from 'styled-components'

interface Props {
    isDark?: boolean
}

export const StyledCollectionNextCard = styled.div`
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    padding: 1rem;

    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`
export const StyledCollectionNextCallout = styled.div`
    color: var(--text-color);
    display: flex;
`
export const StyledCollectionNextLink = styled.a<Props>`
    color: var(--primary-link-color);
    text-decoration: none;

    :hover {
    color: ${props => props.isDark
        ? '#5033e1'
        : '#bfbfff'};
`
