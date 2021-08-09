import React, { useState } from 'react'

import Button from '../Button'
import Card from '../Card'
import Column from '../Column'

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
        <Card showBorder={true}>
            <StyledSearchBody>
                <Column width="extra-small">
                    <img width="32" src="/sourcegraph-mark.svg" alt="Sourcegraph logo" />
                </Column>
                <Column width="medium">
                    <StyledSearchInput
                        type="text"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    />
                </Column>
                <Column width="small">
                    <Button
                        className="primary small"
                        href={`https://sourcegraph.com/search?q=${encodeURIComponent(
                            modifiedQuery
                        )}&utm_source=learn`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>Search on Sourcegraph</span>
                    </Button>
                </Column>
            </StyledSearchBody>
        </Card>
    )
}

export default SourcegraphSearch
