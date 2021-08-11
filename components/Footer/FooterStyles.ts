import styled from 'styled-components'

interface Props {
    minimal?: boolean
}

export const StyledFooterWrapper = styled.footer<Props>`
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
        max-width: 720px;
    }

    @media screen and (max-width: 576px) {
        max-width: 320px;
    }
`
export const StyledFooterRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -.75rem 0;

    & > * {
        max-width: 100%;
    }
`
export const StyledFooterColumn = styled.div`
    flex: 0 0 auto;
    margin: 1rem 0;
    padding: 0 .75rem;
    width: 15%;

    @media screen and (max-width: 768px) {
        width: 25%;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
    }
`
export const StyledLogoFooterColumn = styled.div`
    flex: 0 0 auto;
    margin-bottom: 3rem;
    order: -1;
    padding: 0 .75rem;
    width: 25%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 375px) {
        order: unset;
    }
`
export const StyledFooterColumnHeader = styled.h3`
    font-size: .8rem;
    font-weight: bolder;
    opacity: .4;
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
    color: #6c757d;
    font-size: .9rem;
    padding: .25rem 0;
    display: inline-block;
    text-decoration: none;

    :hover {
        color: #000;
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
    color: #6c757d;
    display: inline-block;
    font-size: .9rem;
    padding: .3rem;
    text-decoration: none;

    :hover {
        color: #000;
    }
`
export const StyledFooterPostscriptWrapper = styled.div`
    display: flex;
    font-size: .875em;
    justify-content: space-between;
    padding: 1.5rem 0 .5rem; 
`
export const StyledFooterPostscriptList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 0 auto 0;
    padding-left: 0;
`
export const StyledFooterPostscriptListItem = styled.li`
    color: #6c757d;
    font-size: 14px;
`
export const StyledFooterPostscriptLink = styled.a`
    color: #5033e1;
    display: block;
    padding: 0 .375rem;
    text-decoration: none;
`
