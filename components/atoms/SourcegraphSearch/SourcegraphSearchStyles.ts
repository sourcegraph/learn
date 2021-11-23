import styled from 'styled-components'

export const StyledSearchLogo = styled.img`
    @media screen and (max-width: 1240px) {
        margin: 0 0 .5rem;
    }
`
export const StyledSearchBody = styled.div`
    background-color: var(--background-color);
    align-items: center;
    flex: 1 1 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    display: flex;
    padding: 1rem;

    @media screen and (max-width: 1240px) {
        flex-direction: column;
        padding: unset;
        margin: 1rem 0;
    }
`
export const StyledSearchInput = styled.textarea`
    background-color: var(--background-color);
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    color: var(--text-color);
    display: block;
    font-family: monospace;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    width: 22rem;

    @media screen and (max-width: 1240px) {
        margin: 0 0 .5rem;
    }

    @media screen and (max-width: 1024px) {
        margin: 1rem 0;
    }

    @media screen and (max-width: 767px) {
        width: auto;
    }
`
