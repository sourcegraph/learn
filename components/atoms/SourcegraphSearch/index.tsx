import Button from '@components/atoms/Button'
import Card from '@components/atoms/Card'
import Column from '@components/atoms/Column'
import { ThemeContext } from '@hooks/contexts/theme'
import sanitizeString from '@util/sanitizeString'
import { FunctionComponent, useState, useContext } from 'react'

import { StyledSearchBody, StyledSearchInput, StyledSearchLogo } from './SourcegraphSearchStyles'

interface Props {
    query: string
    patternType?: string
}

const SourcegraphSearch: FunctionComponent<Props> = props => {
    const theme = useContext(ThemeContext)
    const [query, setQuery] = useState(sanitizeString(props.query))
    const queryString = props.patternType
        ? `https://sourcegraph.com/search?q=${encodeURIComponent(sanitizeString(query)+` patternType:${props.patternType}`)}&utm_source=learn`
        : `https://sourcegraph.com/search?q=${encodeURIComponent(sanitizeString(query))}&utm_source=learn`

    return (
        <Card showBorder={true}>
            <StyledSearchBody>
                <Column className='flex-medium-static'>
                    <StyledSearchLogo width="32" src="https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-mark.svg" alt="Sourcegraph logo" />
                </Column>
                <Column className='flex-medium-static'>
                    <StyledSearchInput
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    />
                </Column>
                <Column className='flex-medium-static'>
                    <Button
                        className="primary small"
                        href={queryString}
                        target="_blank"
                        rel="noreferrer"
                        isDark={theme.isDark}
                    >
                        <span>Search on Sourcegraph</span>
                    </Button>
                </Column>
            </StyledSearchBody>
        </Card>
    )
}

export default SourcegraphSearch
