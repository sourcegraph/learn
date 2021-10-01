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
                <StyledNavBarLogoLink href="/">
                    <SyledNavBarLogoImage src="https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-learn.svg" alt="Sourcegraph logo" width="150" height="25" />
                </StyledNavBarLogoLink>
                <StyledNavBarMobileToggle 
                    onClick={() => setExpandOnMobile(!expandOnMobile)}
                    aria-label="Expand Nav Items">
                    <StyledNavBarMobileIcon>
                        <MenuIcon size={30} />
                    </StyledNavBarMobileIcon>
                </StyledNavBarMobileToggle>
                <StyledNavBarItemsWrapper expandOnMobile={expandOnMobile}>
                    <StyledNavBarItemsContainer>
                        <StyledNavBarItemLink href="/posts">Tutorials </StyledNavBarItemLink>
                        <StyledNavBarItemLink href="/videos">Videos </StyledNavBarItemLink>
                        <StyledNavBarItemLink 
                            href="https://docs.sourcegraph.com"
                            target="_blank"
                            rel="noreferrer">
                            Docs
                        </StyledNavBarItemLink>
                    </StyledNavBarItemsContainer>
                    <div>                
                        <Button 
                            href="https://sourcegraph.com/search" 
                            className="outline-primary"
                            target="_blank"
                            rel="noreferrer">
                            Search on Sourcegraph
                        </Button>                     
                    </div>
                </StyledNavBarItemsWrapper>
            </StyledNavBarContainer>
        </StyledNavBarWrapper>
    )
}

export default NavBar
