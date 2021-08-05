import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import YouTubeIcon from 'mdi-react/YoutubeIcon'
import Link from 'next/link'
import React from 'react'

import CreativeCommonsNotice from '../atoms/CreativeCommonsNotice'

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

const Footer: React.FunctionComponent<Props> = ({ minimal }) => (
    <StyledFooterWrapper minimal={minimal}>
        <StyledFooterContainer>
            {!minimal && (
                <>
                    <StyledFooterRow>
                        <StyledFooterColumn>
                            <StyledFooterColumnHeader>About Sourcegraph</StyledFooterColumnHeader>
                            <StyledFooterColumnList>
                                <li>
                                    <Link href="https://about.sourcegraph.com/case-studies" passHref={true}>
                                        <StyledFooterColumnListLink>Case studies</StyledFooterColumnListLink>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://about.sourcegraph.com/customers" passHref={true}>
                                        <StyledFooterColumnListLink>Customers</StyledFooterColumnListLink>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://about.sourcegraph.com/pricing" passHref={true}>
                                        <StyledFooterColumnListLink>Pricing</StyledFooterColumnListLink>
                                    </Link>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink
                                        href="https://info.sourcegraph.com/hubfs/CTA%20assets/Sourcegraph-overview.pdf"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Sourcegraph overview (PDF)
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
                                        href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                                    >
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
                        <StyledFooterColumn>
                            <StyledFooterColumnHeader>Company</StyledFooterColumnHeader>
                            <StyledFooterColumnList>
                                <li>
                                    <StyledFooterColumnListLink href="https://about.sourcegraph.com/about">
                                        About
                                    </StyledFooterColumnListLink>
                                </li>
                                <li>
                                    <StyledFooterColumnListLink href="https://about.sourcegraph.com/company/careers">
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
                        <StyledLogoFooterColumn>
                            <a href="https://about.sourcegraph.com">
                                <StyledFooterLogo src="/sourcegraph-logo.svg" alt="Sourcegraph - Universal code search" />
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
                            </StyledSocialIconsContainer>
                            <CreativeCommonsNotice />
                        </StyledLogoFooterColumn>
                    </StyledFooterRow>
                </>
            )}
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
        </StyledFooterContainer>
    </StyledFooterWrapper>
)

export default Footer
