import styled from 'styled-components'

interface Props {
    minimal?: boolean
}

export const StyledFooterWrapper = styled.footer<Props>`
    margin: 21.88rem 0 0;
    padding-bottom: ${props => props.minimal
        ? ''
        : '.5rem'};
`
export const StyledFooterContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1320px;
    padding: 0 .75rem;

    @media screen and (max-width: 768px) {
        margin: 0;
        max-width: 720px;
        padding: 0;
    }

    @media screen and (max-width: 576px) {
        max-width: 320px;
    }
`
export const StyledFooterRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & > * {
        max-width: 100%;
    }

    @media screen and (max-width: 1250px) {
        margin: 0 3rem;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        margin: unset;
    }

`
export const StyledFooterColumn = styled.div`
    flex: 0 0 15%;
    margin: 1rem 0;
    padding: 0 .75rem;

    @media screen and (max-width: 768px) {
        width: 25%;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
    }
`
export const StyledLogoFooterColumn = styled.div`
    flex: 2 0 15%;
    margin: 0 3rem;

    @media screen and (max-width: 1024px) {
        margin: unset;
    }

    @media screen and (max-width: 768px) {
        padding: 0 .75rem;
        width: 100%;
    }

    @media screen and (max-width: 375px) {
        order: unset;
    }
`
export const StyledFooterColumnHeader = styled.h3`
    font-size: .8rem;
    font-weight: bolder;
    text-transform: uppercase;
`
export const StyledFooterColumnList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 0 auto;
    list-style: none;
`
export const StyledFooterColumnListLink = styled.a`
    color: var(--text-color);
    font-size: .9rem;
    padding: .25rem 0;
    display: inline-block;
    text-decoration: none;
    opacity: .8;

    :hover {
        color: var(--text-color);
        opacity: unset;
    }
`
export const StyledFooterLogo = styled.img`
    display: flex;
    flex-wrap: wrap;
    height: 2.5rem;
    margin: 0 -.75rem 0 .1rem;
    width: 12.5rem;
`
export const StyledSocialIconsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: .25rem auto 0;
    padding-left: 0;
` 
export const StyledFooterSocialLink = styled.a`
    color: var(--text-color);
    display: inline-block;
    font-size: .9rem;
    padding: .3rem;
    text-decoration: none;
    opacity: .8;

    :hover {
        color: var(--text-color);
        opacity: unset;
    }
`
export const StyledFooterPostscriptWrapper = styled.div`
    display: flex;
    flex: 2 0 16%;
    font-size: .875em;
    justify-content: space-between;
`
export const StyledFooterPostscriptList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 3rem 0;

    @media screen and (max-width: 1024px) {
        padding: 0 .75rem;
    }
`
export const StyledFooterPostscriptListItem = styled.li`
    color: #6c757d;
    font-size: 12px;
`
export const StyledFooterPostscriptLink = styled.a`
    color: #5033e1;
    display: block;
    font-size: 12px;
    padding: 0 .375rem;
    text-decoration: none;
`
