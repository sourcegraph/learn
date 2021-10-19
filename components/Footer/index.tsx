import CreativeCommonsNotice from '@components/atoms/CreativeCommonsNotice'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import SpotifyIcon from 'mdi-react/SpotifyIcon'
import TwitchIcon from 'mdi-react/TwitchIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import YouTubeIcon from 'mdi-react/YoutubeIcon'
import { FunctionComponent } from 'react'

import {
    StyledFooterWrapper,
    StyledFooterContainer,
    StyledFooterRow,
    StyledFooterColumn,
    StyledLogoFooterColumn,
    StyledFooterColumnHeader,
    StyledFooterColumnList,
    StyledFooterColumnListLink,
    StyledFooterLogo,
    StyledSocialIconsContainer,
    StyledFooterSocialLink,
    StyledFooterPostscriptWrapper,
    StyledFooterPostscriptList,
    StyledFooterPostscriptListItem,
    StyledFooterPostscriptLink,
} from './FooterStyles'

interface Props {
    minimal?: boolean
}

const Footer: FunctionComponent<Props> = ({ minimal }) => (
    <StyledFooterWrapper minimal={minimal}>
        <StyledFooterContainer>
            {!minimal && (
                <>
                    <StyledFooterRow>
                        <StyledFooterColumn />
                        <StyledLogoFooterColumn >
                            <a href="https://sourcegraph.com">
                                <StyledFooterLogo src="https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-logo.svg" alt="Sourcegraph - Universal code search" width="80" height="28" />
                            </a>
                            <StyledSocialIconsContainer>
                                <li>
                                    <StyledFooterSocialLink
                                        href="https://github.com/sourcegraph"
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        aria-label="GitHub"
                                    >
                                        <GithubIcon />
                                    </StyledFooterSocialLink>
                                </li>
                                <li>
                                    <StyledFooterSocialLink
                                        href="https://twitter.com/sourcegraph"
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        aria-label="Twitter"
                                    >
                                        <TwitterIcon />
                                    </StyledFooterSocialLink>
                                </li>
                                <li>
                                    <StyledFooterSocialLink
                                        href="https://www.linkedin.com/company/4803356/"
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <LinkedinIcon />
                                    </StyledFooterSocialLink>
                                </li>
                                <li>
                                    <StyledFooterSocialLink
                                        href="https://www.youtube.com/c/Sourcegraph/featured"
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        aria-label="YouTube"
                                    >
                                        <YouTubeIcon />
                                    </StyledFooterSocialLink>
                                </li>
                                <li>
                                    <StyledFooterSocialLink
                                        href="https://www.twitch.tv/sourcegraph"
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        aria-label="YouTube"
                                    >
                                        <TwitchIcon />
                                    </StyledFooterSocialLink>
                                </li>
                                <li>
                                    <StyledFooterSocialLink
                                        href="https://open.spotify.com/user/p3ntuomfda8r7czdbsgy36ogk?si=8095204aefc24587"
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        aria-label="YouTube"
                                    >
                                        <SpotifyIcon />
                                    </StyledFooterSocialLink>
                                </li>
                            </StyledSocialIconsContainer>
                            <CreativeCommonsNotice />
                        </StyledLogoFooterColumn>
                        <StyledFooterColumn>
                            <StyledFooterColumnHeader>Company</StyledFooterColumnHeader>
                            <StyledFooterColumnList>
                                <li>
                                    <StyledFooterColumnListLink href="https://about.sourcegraph.com/about">
                                        About
                                    </StyledFooterColumnListLink>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink href="https://boards.greenhouse.io/sourcegraph91">
                                        Careers
                                    </StyledFooterColumnListLink>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink href="https://about.sourcegraph.com/contact">
                                        Contact
                                    </StyledFooterColumnListLink>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink href="https://about.sourcegraph.com/handbook">
                                        Handbook
                                    </StyledFooterColumnListLink>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink href="https://about.sourcegraph.com/news">
                                        News
                                    </StyledFooterColumnListLink>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink href="https://about.sourcegraph.com/company/strategy">
                                        Sourcegraph strategy
                                    </StyledFooterColumnListLink>
                                </li>
                            </StyledFooterColumnList>
                        </StyledFooterColumn>
                        <StyledFooterColumn>
                            <StyledFooterColumnHeader>Resources</StyledFooterColumnHeader>
                            <StyledFooterColumnList>
                                <li>
                                    <StyledFooterColumnListLink href="https://about.sourcegraph.com/blog">
                                        Blog
                                    </StyledFooterColumnListLink>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink
                                        href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md">
                                        Changelog
                                    </StyledFooterColumnListLink>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink href="https://docs.sourcegraph.com">
                                        Documentation
                                    </StyledFooterColumnListLink>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink href="https://learn.sourcegraph.com">
                                        Learn
                                    </StyledFooterColumnListLink>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink href="https://about.sourcegraph.com/podcast">
                                        Podcast
                                    </StyledFooterColumnListLink>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink href="https://info.sourcegraph.com/emergence-of-big-code-2020-survey">
                                        Big code survey
                                    </StyledFooterColumnListLink>
                                </li>
                            </StyledFooterColumnList>
                        </StyledFooterColumn>
                        <StyledFooterColumn />
                        <StyledFooterColumn />
                        <StyledFooterPostscriptWrapper>
                            <StyledFooterPostscriptList>
                                <StyledFooterPostscriptListItem>&copy; 2021 Sourcegraph</StyledFooterPostscriptListItem>
                                <li>
                                    <StyledFooterPostscriptLink href="https://about.sourcegraph.com/terms">
                                        Terms
                                    </StyledFooterPostscriptLink>
                                </li>
                                <li>
                                    <StyledFooterPostscriptLink href="https://about.sourcegraph.com/security">
                                        Security
                                    </StyledFooterPostscriptLink>
                                </li>
                                <li>
                                    <StyledFooterPostscriptLink href="https://about.sourcegraph.com/privacy">
                                        Privacy
                                    </StyledFooterPostscriptLink>
                                </li>
                            </StyledFooterPostscriptList>
                        </StyledFooterPostscriptWrapper>
                    </StyledFooterRow>
                </>
            )}

        </StyledFooterContainer>
    </StyledFooterWrapper>
)

export default Footer
