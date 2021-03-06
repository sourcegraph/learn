import Button from '@components/atoms/Button'
import SiteSearch from '@components/atoms/SiteSearchBar'
import { ThemeContext } from '@hooks/contexts/theme'
import MenuIcon from 'mdi-react/MenuIcon'
import MoonWaningCresentIcon from 'mdi-react/MoonWaningCrescentIcon'
import WeatherSunnyIcon from 'mdi-react/WeatherSunnyIcon'
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
    StyledToggleButtonWrapper,
} from './NavBarStyles'

const NavBar: FunctionComponent = () => {
    const [ expandOnMobile, setExpandOnMobile ] = useState(false)
    const theme = useContext(ThemeContext)

    return (
        <StyledNavBarWrapper id='nav'>
            <StyledNavBarContainer>
                <StyledNavBarLogoLink href="/">
                    <SyledNavBarLogoImage />
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
                            rel="noreferrer"
                            isDark={theme.isDark}>
                            Search on Sourcegraph
                        </Button>
                        <StyledToggleButtonWrapper>
                            <Button
                                className="flex"
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => theme.toggleTheme('dark')}>
                                <MoonWaningCresentIcon />
                                Dark
                            </Button>
                            |
                            <Button
                                className="flex"
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => theme.toggleTheme('light')}>
                                <WeatherSunnyIcon />
                                Light
                            </Button>
                        </StyledToggleButtonWrapper>
                    </StyledButtonsWrapper>
                </StyledNavBarItemsWrapper>
            </StyledNavBarContainer>
        </StyledNavBarWrapper>
    )
}

export default NavBar
