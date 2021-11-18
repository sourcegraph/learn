import { ThemeContext } from '@hooks/contexts/theme'
import Link from 'next/link'
import { FunctionComponent, useContext } from 'react'

import {
    StyledErrorPageWrapper,
    StyledErrorPageText,
    StyledErrorPageImageHeader,
    StyledHeaderText,
} from './ErrorTemplateStyles'

const ErrorTemplate: FunctionComponent = () => {
    const theme = useContext(ThemeContext)

    return (
        <StyledErrorPageWrapper>
            <StyledErrorPageImageHeader>
                <img alt='Sourcegraph robots' src='https://storage.googleapis.com/sourcegraph-assets/learn/images/sg_robots.svg' />
            </StyledErrorPageImageHeader>
            <StyledHeaderText>Not what you were ... searching for?</StyledHeaderText>
            <StyledErrorPageText isDark={theme.isDark}>
                Head back over to the {' '}
                <Link href='/'>
                    <a>Learn homepage</a>
                </Link>
            </StyledErrorPageText>
        </StyledErrorPageWrapper>
    )
}

export default ErrorTemplate
