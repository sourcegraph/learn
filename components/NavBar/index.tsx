import Button from '@components/atoms/Button'
import MenuDownIcon from 'mdi-react/MenuDownIcon'
import MenuIcon from 'mdi-react/MenuIcon'
import MenuUpIcon from 'mdi-react/MenuUpIcon'
import { FunctionComponent, useState } from 'react'

import {
    StyledNavBarWrapper,
    StyledNavBarContainer,
    StyledNavBarLogoLink,
    SyledNavBarLogoImage,
    StyledNavBarMobileToggle,
    StyledNavBarMobileIcon,
    StyledNavBarItemsWrapper,
    StyledNavBarItemsContainer,
    StyledNavBarItemLink,
    StyledNavBarDropDownContainer,
    StyledNavBarDropDownToggle,
    StyledNavBarDropDownItems,
    StyledNavBarDropDownItem,
} from './NavBarStyles'

const NavBar: FunctionComponent = () => {
    const [ expandDropdown, setExpandDropdown ] = useState(false)
    const [ expandOnMobile, setExpandOnMobile ] = useState(false)

    return (
        <StyledNavBarWrapper>
            <StyledNavBarContainer>
                <StyledNavBarLogoLink href="https://about.sourcegraph.com/">
                    <SyledNavBarLogoImage src="/sourcegraph-logo.svg" />
                </StyledNavBarLogoLink>
                <StyledNavBarMobileToggle 
                    onClick={() => setExpandOnMobile(!expandOnMobile)}
                    expandOnMobile={expandOnMobile}>
                    <StyledNavBarMobileIcon>
                        <MenuIcon size={30} />
                    </StyledNavBarMobileIcon>
                </StyledNavBarMobileToggle>
                <StyledNavBarItemsWrapper expandOnMobile={expandOnMobile}>
                    <StyledNavBarItemsContainer>
                        <StyledNavBarItemLink href="https://docs.sourcegraph.com">Docs</StyledNavBarItemLink>
                        <StyledNavBarDropDownContainer onClick={() => setExpandDropdown(!expandDropdown)}>
                            <StyledNavBarDropDownToggle expandDropdown={expandDropdown}>
                                Learn
                                {expandDropdown
                                    ? <MenuUpIcon />
                                    : <MenuDownIcon />}
                            </StyledNavBarDropDownToggle>
                            {expandDropdown && (
                                <StyledNavBarDropDownItems>        
                                    <StyledNavBarDropDownItem href="/">Overview </StyledNavBarDropDownItem>
                                    <StyledNavBarDropDownItem href="/tags/tutorial">Tutorials </StyledNavBarDropDownItem>
                                    <StyledNavBarDropDownItem href="/tags/video">Videos </StyledNavBarDropDownItem>
                                </StyledNavBarDropDownItems>
                            )}
                        </StyledNavBarDropDownContainer>
                    </StyledNavBarItemsContainer>
                    <StyledNavBarItemsContainer>
                        <div>
                            <Button href="https://sourcegraph.com/search" className="outline-primary">
                                Search on Sourcegraph
                            </Button>
                        </div>
                    </StyledNavBarItemsContainer>
                </StyledNavBarItemsWrapper>
            </StyledNavBarContainer>
        </StyledNavBarWrapper>
    )
}

export default NavBar
