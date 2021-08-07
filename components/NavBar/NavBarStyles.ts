import styled from 'styled-components'

interface Props {
    expandNavItems?: boolean | undefined
    expandDropdown?: boolean | undefined
    expandOnMobile?: boolean | undefined
}

export const StyledNavBarWrapper = styled.nav`
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: .5rem 0;
    position: relative;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: flex-start;
    }
`
export const StyledNavBarContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: inherit;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1320px;
    padding: 1rem .75rem;
    width: 100%;

    @media screen and (max-width: 768px) {
        max-width: 720px;
    }
`

export const StyledNavBarLogoLink = styled.a`
    color: #000;
    font-size: 1.25rem;
    margin-right: 1rem;
    padding: .3125rem 0;
    text-decoration: none;
    white-space: nowrap;
`
export const SyledNavBarLogoImage = styled.img`
    vertical-align: -.3125rem;
    width: 9.375rem;
`

export const StyledNavBarMobileToggle = styled.button<Props>`
    background-color: transparent;
    border: 1px solid #d0d2d4;
    border-radius: .25rem;
    cursor: pointer;
    color: #000;
    display: none;
    opacity: .55;
    font-size: 1.25rem;
    line-height: 1;
    margin: 0;
    padding: .25rem .75rem;

    @media screen and (max-width: 768px) {
        display: block;
    }
`
export const StyledNavBarMobileIcon = styled.span`
    color: #000;
    cursor: pointer;
    display: inline-block;
    font-size: 1.25rem;
    height: 1.5em;
    line-height: 1;
    opacity: .55;
    vertical-align: middle;
    width: 1.5em;
`
export const StyledNavBarItemsWrapper = styled.div<Props>`
    align-items: center;
    display: flex;
    flex-basis: auto;
    flex-grow: 1;

    @media screen and (max-width: 768px) {
        flex-basis: 100%;
        flex-direction: column;
        overflow: ${props => props.expandOnMobile
            ? ''
            : 'hidden'};
        opacity: ${props => props.expandOnMobile
            ? '1'
            : '0'};
        height: ${props => props.expandOnMobile
            ? '100%'
            : '0'};
        transition: ${props => props.expandOnMobile
            ? 'all .5s ease-in 400ms'
            : 'all .5s ease-out 400ms'};
    }
`
export const StyledNavBarItemsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 0;
    margin: 0 auto 0 0;
    
    @media screen and (max-width: 1023px) {
        align-items: flex-start;
        flex-direction: column;
    }
`
export const StyledNavBarItemLink = styled.a`
    color: #000;
    display: block;
    opacity: .55;
    padding: 0 .5rem;
    text-decoration: none;

    :hover {
        color: #000;
        opacity: unset;
    }

    @media screen and (max-width: 768px) {
        padding: .5rem 0;
    }
`
export const StyledNavBarDropDownContainer = styled.div`
    margin-top: .125rem;
    position: relative;

    @media screen and (max-width: 768px) {
        padding: .5rem 0;
        margin-top: 0;
    }
`
export const StyledNavBarDropDownToggle = styled.a<Props>`
    color: #000;
    cursor: pointer;
    display: block;
    opacity: ${props => props.expandDropdown
        ? '1'
        : '.55'};
    padding: 0 .5rem;
    text-decoration: none;
    white-space: nowrap;

    :hover {
        color: #000;
    }

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`
export const StyledNavBarDropDownItems = styled.div`
    display: block;
    left: 0;
    margin-top: .125rem;
    position: absolute;
    top: 100%;
    min-width: 10rem;
    padding: .5rem 0;
    margin: 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #d0d2d4;
    border-radius: .25rem;
    z-index: 5;

    @media screen and (max-width: 768px) {
        position: static;
    }
`
export const StyledNavBarDropDownItem = styled.a`
    display: block;
    width: 100%;
    padding: .25rem 1rem;
    clear: both;
    font-weight: 400;
    font-size: 1rem;
    color: #212529;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;

    :hover {
        background-color: #e6e8ea;
        color: #212529;
    }
`
