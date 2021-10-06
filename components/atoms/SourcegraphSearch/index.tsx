import Button from '@components/atoms/Button'
import Card from '@components/atoms/Card'
import Column from '@components/atoms/Column'
import sanitizeString from '@util/sanitizeString'
import { FunctionComponent, useState } from 'react'

import { StyledSearchBody, StyledSearchInput } from './SourcegraphSearchStyles'

interface Props {
    query: string
    patternType?: string
}

const SourcegraphSearch: FunctionComponent<Props> = props => {
    const [query, setQuery] = useState(sanitizeString(props.query))
    const queryString = props.patternType
        ? `https://sourcegraph.com/search?q=${encodeURIComponent(query+` patternType:${props.patternType}`)}&utm_source=learn`
        : `https://sourcegraph.com/search?q=${encodeURIComponent(query)}&utm_source=learn`

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
                        href={queryString}
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
