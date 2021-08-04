import React from 'react'

import {
    StyledCreativeCommonsNoticeContainer,
    StyledCreativeCommonsNoticeText,
    StyledCreativeCommonsLink,
} from './CreativeCommonsNoticeStyles'

const creativeCommonsUrl = 'https://creativecommons.org/licenses/by-nc-sa/4.0/'

const CreativeCommonsNotice: React.FunctionComponent = () => (
    <StyledCreativeCommonsNoticeContainer>
        <StyledCreativeCommonsNoticeText>
            This work is licensed under a{' '}
            <StyledCreativeCommonsLink href={creativeCommonsUrl}>
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
            </StyledCreativeCommonsLink>
        </StyledCreativeCommonsNoticeText>
        <a href={creativeCommonsUrl}>
            <img alt="Creative Commons badge" width="80" src="/creative-commons-by-nc-sa.svg" />
        </a>
    </StyledCreativeCommonsNoticeContainer>
)

export default CreativeCommonsNotice
