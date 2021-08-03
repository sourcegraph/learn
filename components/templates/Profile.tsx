import React from 'react'

import AuthorCollection from '../../interfaces/AuthorCollection'
import { MarkdownFileWithUrl } from '../../pages/authors'
import ContentCardList from '../atoms/ContentCardList'
import PageLayout from '../layouts/PageLayout'

export interface Props {
 author: AuthorCollection
 records: MarkdownFileWithUrl[]
}

const Author: React.FunctionComponent<Props> = props => {
  const authorName = props.author.name

  return (
      <PageLayout documentTitle={authorName} appendSiteTitle={true}>
         <div className="mb-4 w-100 p-2 d-flex flex-column">
            <h5 className="text-center"> {authorName}</h5>
            <p className="text-center">{props.author.bio}</p>
            {
              props.author.socialLinks?.map(socialLink=> (
                <p> the account{socialLink}</p>
                ))
            }
         </div>
          <ContentCardList records={props.records} />
      </PageLayout>
  )
}

export default Author
