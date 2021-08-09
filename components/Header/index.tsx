import React from 'react'

import HeaderCta from '../atoms/HeaderCta'
import Row from '../atoms/Row'

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

const Header: React.FunctionComponent<Props> = props => (
    <>
        <Row>
            {props.showImage && <StyledHeaderImage src={props.headerImage} alt={props.headerImageAlt} />}
            {props.showCta && <HeaderCta link={props.link} text={props.text} />}
            {props.headerText &&
                <StyledHeaderText>
                    {props.headerText}
                </StyledHeaderText>}
        </Row>
    </>
)

export default Header
