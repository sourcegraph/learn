import Button from '@components/atoms/Button'
import InteractiveSearchResults from '@components/atoms/InteractiveSearchResults'
import SearchResultsHeader from '@components/atoms/SearchResultsHeader'
import { ResultsObject, RepositoryResultsObject } from '@interfaces/Search'
import createRandomId from '@util/createRandomId'
import useInteractiveSearch from 'hooks/interactiveSearch'
import React, { FunctionComponent, useRef } from 'react'

import {
    StyledSearchInput,
    StyledInputSearchColumn,
    StyledResultsBorder,
    StyledResultsWrapper,
    StyledResultsContainer,
    StyledResultsCodeBlock,
    StyledErrorMessageContainer,
    StyledSearchOnCloudContainer,
} from './SourcegraphInteractiveSearchStyles'

interface Props {
    initialQuery: string
    initialSearchURL: string
    initialPatternType: string
}

const SourcegraphInteractiveSearch: FunctionComponent<Props> = props => {
    const { initialQuery, initialSearchURL, initialPatternType } = props
    const currentQuery = useRef(initialQuery) 
    const search = useInteractiveSearch({ initialSearchURL, initialQuery, initialPatternType })
    const updateQuery = (value: string): string => currentQuery.current = value
    const handleClick = (): void => search.setQuery(currentQuery.current)

    return (
        <StyledResultsWrapper>
            Search Query:
            <StyledInputSearchColumn>
                <StyledSearchInput
                    type="text"
                    defaultValue={initialQuery}
                    onChange={event => updateQuery(event.target.value)}
                />
                <Button
                    className="primary small"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => handleClick()}
                >
                    <span>Search on Sourcegraph</span>
                </Button>
            </StyledInputSearchColumn>
            <StyledResultsBorder />
           {search.results && search.results.length > 0 ? 
                (search.results.slice(0,4).map((result: ResultsObject) => (
                   <React.Fragment key={createRandomId()}>
                        {result.__typename === 'FileMatch' && (
                            <StyledResultsContainer>
                                <SearchResultsHeader
                                    repository={result.repository.name}
                                    file={result.file.path} 
                                    result={result} />
                                <InteractiveSearchResults
                                    result={result}
                                    lineMatches={result.lineMatches}
                                    patternType={initialPatternType}
                                    query={currentQuery.current}
                                />
                            </StyledResultsContainer>
                        )}
                        {result.__typename === 'Repository' && (
                            <StyledResultsContainer>
                                <SearchResultsHeader 
                                    result={result}
                                    repository={result.name}
                                    file='' />
                            </StyledResultsContainer>
                        )}
                        {result.__typename === 'CommitSearchResult' && (
                            <StyledResultsContainer>
                                <SearchResultsHeader 
                                    result={result}
                                    repository={result.commit.repository.name}
                                    file={`${result.commit.author.person.displayName}:${result.commit.subject}`} />
                                <StyledResultsCodeBlock>
                                    {result.commit.subject}
                                </StyledResultsCodeBlock>
                            </StyledResultsContainer>
                        )}
                    </React.Fragment>
                )))                   
            : (
                <StyledErrorMessageContainer>
                    No results to display at this time.
                </StyledErrorMessageContainer>
            )}
            <StyledSearchOnCloudContainer>
                Search on Sourcegraph cloud:
                <StyledInputSearchColumn>
                    <StyledSearchInput
                        type="text"
                        defaultValue={currentQuery.current}
                        onChange={event => updateQuery(event.target.value)}
                    />
                    <Button
                        className="primary small"
                        target="_blank"
                        rel="noreferrer"
                        href={`https://sourcegraph.com/search?q=${encodeURIComponent(
                            currentQuery.current
                        )}&patternType=${initialPatternType}&utm_source=learn`}
                    >
                        <span>Search on Sourcegraph</span>
                    </Button>
                </StyledInputSearchColumn>
            </StyledSearchOnCloudContainer>
        </StyledResultsWrapper>
    )
}

export default SourcegraphInteractiveSearch
