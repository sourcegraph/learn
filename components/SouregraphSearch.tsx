import React, { useState } from 'react'

interface Props {
    query: string
}

export default function SourcegraphSearch(props: Props) {
    const [query, setQuery] = useState(props.query)
    return (
        <div className="row my-4">
            <div className="col-auto">
                <img width="32" src="/sourcegraph-mark.svg" />
            </div>
            <div className="col-auto">
                <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
            </div>
            <div className="col-auto">
                <a className="btn btn-primary" href={`https://sourcegraph.com/search?q=${encodeURIComponent(query)}`}>
                    Search on Sourcegraph
                </a>
            </div>
        </div>
    )
}
