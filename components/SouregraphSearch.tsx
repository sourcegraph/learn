import React, { useState } from 'react'

interface Props {
    query: string
}

export default function SourcegraphSearch(props: Props) {
    const [query, setQuery] = useState(props.query)
    return (
        <div className="my-4">
            <div className="card">
                <div className="card-body row">
            <div className="col-1">
                <img width="32" src="/sourcegraph-mark.svg" />
            </div>
            <div className="col-6">
                <input
                    type="text"
                    className="form-control w-100"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
            </div>
            <div className="col-5 col-sm-12 mt-sm-4">
                <a className="btn btn-primary w-100" href={`https://sourcegraph.com/search?q=${encodeURIComponent(query)}`} target="_blank">
                    Search on Sourcegraph
                </a>
            </div>
            </div>
            </div>
        </div>
    )
}
