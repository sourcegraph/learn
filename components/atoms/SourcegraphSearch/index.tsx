import React, { useState } from 'react'

import Button from '../Button'
import Card from '../Card'

import { StyledSearchBody, StyledSearchInput } from './SourcegraphSearchStyles'

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
        <Card>
            <StyledSearchBody>
                <div className="col extra-small">
                    <img width="32" src="/sourcegraph-mark.svg" alt="Sourcegraph logo" />
                </div>
                <div className="col medium">
                    <StyledSearchInput
                        type="text"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    />
                </div>
                <div className="col small">
                    <Button
                        className="is-primary small"
                        href={`https://sourcegraph.com/search?q=${encodeURIComponent(
                            modifiedQuery
                        )}&utm_source=learn`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>Search on Sourcegraph</span>
                    </Button>
                </div>
            </StyledSearchBody>
        </Card>
    )
}

export default SourcegraphSearch
