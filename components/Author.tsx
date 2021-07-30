import React from 'react'

import AuthorCollection from '../interfaces/AuthorCollection'
import { MarkdownFileWithUrl } from '../pages/authors'

import ContentCardList from './ContentCardList'
import PageLayout from './PageLayout'

export interface Props {
 validAuthor: AuthorCollection
 filteredRecordsWithUrl: MarkdownFileWithUrl[]
}

const Author: React.FunctionComponent<Props> = props => {
  const authorName = props.validAuthor.name
  return (
      <PageLayout documentTitle={`Resources by ${authorName}`} appendSiteTitle={true}>
         <div className="mb-4 w-100 p-2 d-flex flex-column">
            <div className=" w-25 align-self-center p-3">
              {props.validAuthor.image ?
              <img src={props.validAuthor.image} alt="Author Avatar" className="card-img-top rounded-circle" /> :
              <img src="/authors/unisex-avatar.svg" alt="Author Avatar" className="card-img-top rounded-circle  p-2" />}
            </div>
            <h5 className="text-center"> {authorName}</h5>
            <p className="text-center">{props.validAuthor.bio}</p>
         </div>
          <p>{`All articles written by ${authorName}`}</p>
          <ContentCardList records={props.filteredRecordsWithUrl} />
      </PageLayout>
  )
}

export default Author
