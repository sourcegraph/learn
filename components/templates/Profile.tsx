import React from 'react'

import AuthorCollection from '../../interfaces/AuthorCollection'
import { MarkdownFileWithUrl } from '../../pages/authors'
import ContentCardList from '../atoms/ContentCardList'
import PageLayout from '../layouts/PageLayout'

import LinkedinIcon from 'mdi-react/LinkedinIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'

export interface Props {
 author: AuthorCollection
 records: MarkdownFileWithUrl[]
}

const Author: React.FunctionComponent<Props> = props => (
      <PageLayout documentTitle={props.author.name} appendSiteTitle={true}>
         <div className="mb-4 w-100 p-2 d-flex flex-column">
            <h5 className="text-center"> {props.author.name}</h5>
            <p className="text-center">{props.author.bio}</p>
            <div className="d-flex align-self-center">
              {
                props.author.socialLinks?.map(socialLink=> {
                  if (socialLink.includes('twitter.com/')) {
                  return <a
                      href={socialLink}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="LinkedIn"
                      >
                    <TwitterIcon />
                    </a>
                  } if(socialLink.includes('linkedin.com')) {
                    return <a
                      href={socialLink}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="LinkedIn"
                      >
                    <LinkedinIcon />
                    </a>
                  }
                  return
                })
              }
            </div>
         </div>
          <ContentCardList records={props.records} />
      </PageLayout>
  )

export default Author
