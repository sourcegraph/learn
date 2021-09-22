import Button from '@components/atoms/Button'
import InteractiveSearchResults from '@components/atoms/InteractiveSearchResults'
import { ResultsObject } from '@interfaces/Search'
import createRandomId from '@util/createRandomId'
import useInteractiveSearch from 'hooks/interactiveSearch'
import FileDocumentOutlineIcon from 'mdi-react/FileDocumentOutlineIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import React, { FunctionComponent, useRef } from 'react'

import {
    StyledSearchInput,
    StyledInputSearchColumn,
    StyledResultsBorder,
    StyledResultsWrapper,
    StyledResultsContainer,
    StyledResultsContainerHeader,
    StyledResultsContainerHeaderDivider,
    StyledResultsContainerHeaderTitle,
    StyledResultsFileName,
    StyledResultsFileNameLink,
    StyledResultsMatchCount,
    StyledIconWrapper,
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
                    {result.repository && result.file && result.lineMatches && (
                        <StyledResultsContainer>
                            <StyledResultsContainerHeader>
                                <StyledIconWrapper>
                                    <FileDocumentOutlineIcon size={24} />
                                </StyledIconWrapper>  
                                <StyledResultsContainerHeaderDivider />
                                <StyledIconWrapper>
                                    <GithubIcon size={24} />
                                </StyledIconWrapper>                               
                                <StyledResultsContainerHeaderTitle>
                                                                            
                                    <StyledResultsFileName>          
                                        <StyledResultsFileNameLink 
                                            href={`https://${result.repository.name}/blob/main/${result.file.path}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {result.repository.name}
                                        </StyledResultsFileNameLink>
                                        {` > ${result.file.path}`}
                                    </StyledResultsFileName>                                     
                                </StyledResultsContainerHeaderTitle>
                                <StyledResultsContainerHeaderDivider />
                                <StyledResultsMatchCount>{result.lineMatches.length > 1 
                                    ? `${result.lineMatches.length} matches`
                                    : '1 match'}
                                </StyledResultsMatchCount>
                                <StyledResultsContainerHeaderDivider />
                            </StyledResultsContainerHeader>
                            <InteractiveSearchResults
                                result={result}
                                lineMatches={result.lineMatches}
                                patternType={initialPatternType}
                                query={currentQuery.current}
                            />
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
