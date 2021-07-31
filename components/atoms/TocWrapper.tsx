import React from 'react'

interface Props {
  tocContents: string
}

const TocWrapper: React.FunctionComponent<Props> = props => (
    <div className="toc-wrapper">
        <h5 className="header">Contents</h5>
        {props.tocContents}
    </div>
)

export default TocWrapper
