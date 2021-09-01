import { FunctionComponent } from 'react'

import {
    StyledCreativeCommonsNoticeContainer,
    StyledCreativeCommonsNoticeText,
    StyledCreativeCommonsLink,
    StyledCreativeCommonsImage,
} from './CreativeCommonsNoticeStyles'

const creativeCommonsUrl = 'https://creativecommons.org/licenses/by-nc-sa/4.0/'

const CreativeCommonsNotice: FunctionComponent = () => (
    <StyledCreativeCommonsNoticeContainer>
        <StyledCreativeCommonsNoticeText>
            This work is licensed under a{' '}
            <StyledCreativeCommonsLink 
                href={creativeCommonsUrl}
                target="_blank"
                rel="noreferrer"
            >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
            </StyledCreativeCommonsLink>
        </StyledCreativeCommonsNoticeText>
        <a 
            href={creativeCommonsUrl}
            target="_blank"
            rel="noreferrer"
        >
            <StyledCreativeCommonsImage alt="Creative Commons badge" src="https://storage.googleapis.com/sourcegraph-assets/learn/icons/creative-commons-by-nc-sa.svg" width="80" height="28" />
        </a>
    </StyledCreativeCommonsNoticeContainer>
)

export default CreativeCommonsNotice
