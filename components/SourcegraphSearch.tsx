import React, { useState } from 'react'

interface Props {
    query: string
    patternType?: string
}

const SourcegraphSearch: React.FunctionComponent<Props> = props => {
    const [query, setQuery] = useState(props.query)
    let modifiedQuery = query

    if (props.patternType) {
        modifiedQuery += ` patternType:${props.patternType}`
    }

    return (
        <div className="my-4">
            <div className="card">
                <div className="card-body row">
                    <div className="col-1">
                        <img width="32" src="/sourcegraph-mark.svg" />
                    </div>
                    <div className="col-7">
                        <input
                            type="text"
                            className="form-control w-100 font-monospace"
                            value={query}
                            onChange={event => setQuery(event.target.value)}
                        />
                    </div>
                    <div className="col-4">
                        <a
                            className="btn btn-primary"
                            href={`https://sourcegraph.com/search?q=${encodeURIComponent(
                                modifiedQuery
                            )}&utm_source=learn`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="small">Search on Sourcegraph</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SourcegraphSearch
