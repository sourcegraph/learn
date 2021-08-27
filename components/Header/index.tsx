import Column from '@components/atoms/Column'
import HeaderCta from '@components/atoms/HeaderCta'
import { FunctionComponent } from 'react'

import { 
    StyledHeaderImage,
    StyledHeaderTextContainer, 
    StyledHeaderImageContainer,
    StyledHeaderText,
} from './HeaderStyles'

interface Props {
    showCta?: boolean
    showImage: boolean
    headerImage?: string
    headerImageAlt?: string
    headerText?: string
    link?: string
    text?: string
}

const Header: FunctionComponent<Props> = props => (
    <>
        <Column className='flex-large'>
        {props.headerText &&
            <StyledHeaderTextContainer>
                <StyledHeaderText>
                    {props.headerText}
                </StyledHeaderText>
            </StyledHeaderTextContainer>}
            <StyledHeaderImageContainer>
                {props.showImage && <StyledHeaderImage src={props.headerImage} alt={props.headerImageAlt} width="80" height="80" />}
                {props.showCta && <HeaderCta link={props.link} text={props.text} />}
            </StyledHeaderImageContainer>  
        </Column>
    </>
)

export default Header
