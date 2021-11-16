
import Button from '@components/atoms/Button'
import { ThemeContext } from '@hooks/contexts/theme'
import MoonWaningCrescentIcon from 'mdi-react/MoonWaningCrescentIcon'
import WeatherSunnyIcon from 'mdi-react/WeatherSunnyIcon'
import { FunctionComponent, useContext } from 'react'

const DarkModeToggle: FunctionComponent = () => {
    const theme = useContext(ThemeContext)

    return (
        <Button
            className="flex"
            target="_blank"
            rel="noreferrer"
            onClick={() => theme.toggleTheme()}>
            
        {theme.isDark ?
        (
            <>
                <MoonWaningCrescentIcon />
                Dark Mode
            </>
        ) : 
        (
            <>
                <WeatherSunnyIcon />
                Light Mode
            </>
        )}
        </Button>
    )
}

export default DarkModeToggle
