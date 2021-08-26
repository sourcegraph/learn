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
                    <SyledNavBarLogoImage src="/sourcegraph-learn.svg" />
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
                        <StyledNavBarItemLink href="/">Overview </StyledNavBarItemLink>
                        <StyledNavBarItemLink href="/tags/tutorial">Tutorials </StyledNavBarItemLink>
                        <StyledNavBarItemLink href="/tags/video">Videos </StyledNavBarItemLink>
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
