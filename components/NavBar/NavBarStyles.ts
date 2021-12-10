import styled from 'styled-components'

interface Props {
    expandDropdown?: boolean
    expandOnMobile?: boolean
}

export const StyledNavBarWrapper = styled.nav`
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: .5rem 0;
    position: relative;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: flex-start;
        max-width: 45rem;
        padding: 0 .75rem;
    }

    @media screen and (max-width: 576px) {
        max-width: 20rem;
        padding: 1rem;
        margin: 0 auto;
    }
`
export const StyledNavBarContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 82.5rem;
    padding: 1rem 1.5rem;
    width: 100%;

    @media screen and (max-width: 768px) {
        max-width: 45rem;
    }

    @media screen and (max-width: 576px) {
        max-width: 20rem;
        padding: 0;
    }
`

export const StyledNavBarLogoLink = styled.a`
    color: var(--text-color);
    font-size: 1.25rem;
    margin-right: 1rem;
    padding: .3125rem 0;
    text-decoration: none;
    white-space: nowrap;
`
export const SyledNavBarLogoImage = styled.div`
    background: var(--logo-image);
    background-repeat: no-repeat;
    height: 1.56rem;
    vertical-align: -.3rem;
    width: 12.19rem;
    margin-bottom: .125rem;
`

export const StyledNavBarMobileToggle = styled.button`
    background-color: transparent;
    border: 1px solid #d0d2d4;
    border-radius: .25rem;
    cursor: pointer;
    color: var(--text-color);
    display: none;
    opacity: .55;
    font-size: 1.25rem;
    line-height: 1;
    margin: 0;
    padding: .25rem .75rem;

    :focus {
        outline: none;
    }

    @media screen and (max-width: 1023px) {
        display: block;
    }
`
export const StyledNavBarMobileIcon = styled.span`
    color: var(--text-color);
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

    @media screen and (max-width: 1023px) {
        flex-basis: 100%;
        flex-direction: column;
        display: ${props => props.expandOnMobile
            ? 'block'
            : 'none'};
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
    color: var(--text-color);
    display: block;
    opacity: .55;
    padding: .5rem;
    text-decoration: none;

    :hover {
        color: var(--text-color);
        opacity: unset;
    }

    @media screen and (max-width: 768px) {
        padding: .5rem 0;
    }
`
export const StyledNavBarDropDownContainer = styled.div`
    align-items: center;
    display: flex;

    @media screen and (max-width: 1023px) {
        align-items: start;
        flex-direction: column;
        margin-top: 0;
    }

    @media screen and (max-width: 768px) {
        padding: .5rem 0;
    }
`
export const StyledNavBarDropDownToggle = styled.div<Props>`
    align-items: center;
    color: var(--text-color);
    cursor: pointer;
    display: flex;
    opacity: ${props => props.expandDropdown
        ? '1'
        : '.55'};
    padding: .5rem;
    text-decoration: none;
    white-space: nowrap;

    :hover {
        color: var(--text-color);
    }

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`
export const StyledNavBarDropDownItems = styled.div`
    display: block;
    position: absolute;
    top: 4rem;
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

    @media screen and (max-width: 1023px) {
        position: relative;
        top: 0;
    }
`
export const StyledNavBarDropDownItem = styled.a`
    display: block;
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
export const StyledButtonsWrapper = styled.div`
    display: flex;
`
export const StyledToggleButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
