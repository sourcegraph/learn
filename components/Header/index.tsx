import Column from '@components/atoms/Column'
import { FunctionComponent } from 'react'

import { 
    StyledHeaderImage,
    StyledHeaderTextContainerAnimated, 
    StyledHeaderImageContainer,
    StyledHeaderText,
    StyledHeaderSharedContainer,
    StyledHeaderTextContainer,
} from './HeaderStyles'

interface Props {
    headerImage?: string
    headerImageAlt?: string
    headerText: string
    isHomepage?: boolean
}

const Header: FunctionComponent<Props> = props => (
    <>
        <Column className='flex-large'>
            {props.isHomepage ?
                (
                    <StyledHeaderSharedContainer>
                        <StyledHeaderTextContainerAnimated>
                            <StyledHeaderText>
                                {props.headerText}
                            </StyledHeaderText>
                        </StyledHeaderTextContainerAnimated>
                        <StyledHeaderImageContainer>
                            {props.headerImage && <StyledHeaderImage src={props.headerImage} alt={props.headerImageAlt} width="80" height="80" />}
                        </StyledHeaderImageContainer>
                    </StyledHeaderSharedContainer>
                ) :
                (
                    <StyledHeaderTextContainer>
                        {props.headerText}
                    </StyledHeaderTextContainer>
                )}
        </Column>
    </>
)

export default Header
