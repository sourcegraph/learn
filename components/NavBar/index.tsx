import Button from '@components/atoms/Button'
import MenuIcon from 'mdi-react/MenuIcon'
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
} from './NavBarStyles'

const NavBar: FunctionComponent = () => {
    const [ expandOnMobile, setExpandOnMobile ] = useState(false)

    return (
        <StyledNavBarWrapper>
            <StyledNavBarContainer>
                <StyledNavBarLogoLink href="https://learn.sourcegraph.com/">
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
                        <StyledNavBarItemLink href="/">Sourcegraph Learn </StyledNavBarItemLink>
                        <StyledNavBarItemLink href="/tags/tutorial">Tutorials </StyledNavBarItemLink>
                        <StyledNavBarItemLink href="/tags/video">Videos </StyledNavBarItemLink>
                        <StyledNavBarItemLink href="https://docs.sourcegraph.com">Docs</StyledNavBarItemLink>
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
