import Card from '@components/atoms/Card'
import Column from '@components/atoms/Column'
import { FunctionComponent } from 'react'

import { 
    StyledHeaderImage,
    StyledHeaderTextContainerAnimated, 
    StyledHeaderImageContainer,
    StyledHeaderText,
    StyledHeaderSharedContainer,
    StyledHeaderTextContainer,
    StyledHeaderCard,
} from './HeaderStyles'

interface Props {
    headerImage?: string
    headerImageAlt?: string
    headerText: string
    isHomepage?: boolean
    isRecordIndex?: boolean
}

const Header: FunctionComponent<Props> = props => (
    <>
        <Column className={props.isHomepage 
            ? 'flex-large width'
            : 'flex-large'}>
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
                props.isRecordIndex ?
                (
                    <StyledHeaderCard>
                        <StyledHeaderTextContainer isRecordIndex={props.isRecordIndex}>
                            {props.headerText}
                        </StyledHeaderTextContainer>
                    </StyledHeaderCard>
                ) :
                (
                    <StyledHeaderTextContainer isRecordIndex={props.isRecordIndex}>
                        {props.headerText}
                    </StyledHeaderTextContainer>
                )}
        </Column>
    </>
)

export default Header
