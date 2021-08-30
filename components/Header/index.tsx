import Column from '@components/atoms/Column'
import HeaderCta from '@components/atoms/HeaderCta'
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
    showCta?: boolean
    showImage: boolean
    headerImage?: string
    headerImageAlt?: string
    headerText: string
    link?: string
    text?: string
    isHomepage: boolean
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
                        {props.showImage && <StyledHeaderImage src={props.headerImage} alt={props.headerImageAlt} width="80" height="80" />}
                        {props.showCta && <HeaderCta link={props.link} text={props.text} />}
                    </StyledHeaderImageContainer>
                </StyledHeaderSharedContainer>
                )
                : (
                <StyledHeaderTextContainer>
                     {props.headerText}
                </StyledHeaderTextContainer>)}
        </Column>
    </>
)

export default Header
