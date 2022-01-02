import ContentCardList from '@components/atoms/ContentCardList'
import PageLayout from '@components/layouts/PageLayout'
import AuthorCollection from '@interfaces/AuthorCollection'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import metaDataDefaults from '@lib/metaDataDefaults'
import sluggify from '@util/sluggify'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import TwitchIcon from 'mdi-react/TwitchIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import { FunctionComponent } from 'react'

import { 
    StyledAuthorName,
    StyledAuthorBio,
    StyledAuthorHeader,
    StyledAuthorSocialLinksContainer,
    StyledAuthorSocialLink,
} from './AuthorTemplateStyles'

export interface Props {
    author: AuthorCollection
    records: MarkdownFileWithUrl[]
}

const AuthorTemplate: FunctionComponent<Props> = props => {
    const updatedUrl = `${metaDataDefaults.url}/authors/${sluggify(props.author.name)}`
    const metaTags = { ...metaDataDefaults, title: props.author.name, url: updatedUrl }

    return (
        <PageLayout metaTags={metaTags}>
            <StyledAuthorHeader>
                <StyledAuthorName>{props.author.name}</StyledAuthorName>
                <StyledAuthorBio>{props.author.bio}</StyledAuthorBio>
                <StyledAuthorSocialLinksContainer>
                    {props.author.twitterLink && (
                        <StyledAuthorSocialLink
                            href={props.author.twitterLink}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="Twitter">
                            <TwitterIcon />
                        </StyledAuthorSocialLink> 
                    )}
                    {props.author.gitHubLink && (
                        <StyledAuthorSocialLink
                            href={props.author.gitHubLink}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="GitHub">
                            <GithubIcon />
                        </StyledAuthorSocialLink> 
                    )}
                    {props.author.linkedInLink && (
                        <StyledAuthorSocialLink
                            href={props.author.linkedInLink}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="LinkedIn">
                            <LinkedinIcon />
                        </StyledAuthorSocialLink> 
                    )}
                    {props.author.twitchLink && (
                        <StyledAuthorSocialLink
                            href={props.author.twitchLink}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="Twitch">
                            <TwitchIcon />
                        </StyledAuthorSocialLink> 
                    )}
                </StyledAuthorSocialLinksContainer>
            </StyledAuthorHeader>
            <ContentCardList records={props.records} />
        </PageLayout>
    )
}

export default AuthorTemplate
