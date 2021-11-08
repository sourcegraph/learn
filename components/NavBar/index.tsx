import Button from '@components/atoms/Button'
import SiteSearch from '@components/atoms/SiteSearchBar'
import { ThemeContext } from '@hooks/contexts/theme'
import LighteningBoltOutlineIcon from 'mdi-react/LightningBoltOutlineIcon'
import MenuIcon from 'mdi-react/MenuIcon'
import { FunctionComponent, useState, useContext } from 'react'

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
    StyledButtonsWrapper,
} from './NavBarStyles'

const NavBar: FunctionComponent = () => {
    const [ expandOnMobile, setExpandOnMobile ] = useState(false)
    const theme = useContext(ThemeContext)

    return (
        <StyledNavBarWrapper id='nav'>
            <StyledNavBarContainer>
                <StyledNavBarLogoLink href="/">
                    <SyledNavBarLogoImage src={theme.logo} alt="Sourcegraph logo" width="150" height="25" />
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
                        <SiteSearch />
                    </StyledNavBarItemsContainer>
                    <StyledButtonsWrapper>                
                        <Button 
                            href="https://sourcegraph.com/search" 
                            className="outline-primary"
                            target="_blank"
                            rel="noreferrer">
                            Search on Sourcegraph
                        </Button>
                        <Button
                            className="flex"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => theme.toggleTheme()}>
                            <LighteningBoltOutlineIcon />
                            Dark Mode
                        </Button>                        
                    </StyledButtonsWrapper>
                </StyledNavBarItemsWrapper>
            </StyledNavBarContainer>
        </StyledNavBarWrapper>
    )
}

export default NavBar
