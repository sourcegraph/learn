import HeaderCta from '@components/atoms/HeaderCta'
import Row from '@components/atoms/Row'
import { FunctionComponent } from 'react'

import { StyledHeaderImage, StyledHeaderText } from './HeaderStyles'

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
        <Row>
            {props.showImage && <StyledHeaderImage src={props.headerImage} alt={props.headerImageAlt} width="393" height="205" />}
            {props.showCta && <HeaderCta link={props.link} text={props.text} />}
            {props.headerText &&
                <StyledHeaderText>
                    {props.headerText}
                </StyledHeaderText>}
        </Row>
    </>
)

export default Header
