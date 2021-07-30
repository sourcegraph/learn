import React from 'react'

import AuthorCollection from '../interfaces/AuthorCollection'
import { MarkdownFileWithUrl } from '../pages/authors'

import ContentCardList from './ContentCardList'
import PageLayout from './PageLayout'

export interface Props {
 author?: AuthorCollection
 records: MarkdownFileWithUrl[]
}

const Author: React.FunctionComponent<Props> = props => {
  const authorName = props.author?.name || 'Unnamed author'
  const authorImage = props.author?.image
  return (
      <PageLayout documentTitle={`Resources by ${authorName}`} appendSiteTitle={true}>
         <div className="mb-4 w-100 p-2 d-flex flex-column">
            <h5 className="text-center"> {authorName}</h5>
            <p className="text-center">{props.author?.bio}</p>
         </div>
          <p>All resources published by {authorName}</p>
          <ContentCardList records={props.records} />
      </PageLayout>
  )
}

export default Author
