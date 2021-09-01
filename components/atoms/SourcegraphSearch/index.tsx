import Button from '@components/atoms/Button'
import Card from '@components/atoms/Card'
import Column from '@components/atoms/Column'
import { FunctionComponent, useState } from 'react'

import { StyledSearchBody, StyledSearchInput } from './SourcegraphSearchStyles'

interface Props {
    query: string
    patternType?: string
}

const SourcegraphSearch: FunctionComponent<Props> = props => {
    const [query, setQuery] = useState(props.query)
    let modifiedQuery = query

    if (props.patternType) {
        modifiedQuery += ` patternType:${props.patternType}`
    }

    return (
        <Card showBorder={true}>
            <StyledSearchBody>
                <Column>
                    <img width="32" src="https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-mark.svg" alt="Sourcegraph logo" />
                </Column>
                <Column>
                    <StyledSearchInput
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    />
                </Column>
                <Column>
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
