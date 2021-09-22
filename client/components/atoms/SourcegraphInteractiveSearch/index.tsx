import Button from '@components/atoms/Button'
import Highlighter from '@components/atoms/Highlighter'
import { ResultsObject, LineMatch } from '@interfaces/Search'
import createRandomId from '@util/createRandomId'
import { returnPreviousLine, returnNextLine }from '@util/returnLineMatchContext'
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
    StyledResultsCodeTable,
    StyledResultsCodeContainer,
    StyledResultsCodeBlock,
    StyledResultsCodeLineNumber,
    StyledResultsCodeLine,
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
                            <StyledResultsCodeContainer>
                                {result.lineMatches.length > 0 && (
                                    result.lineMatches.slice(0,4).map((line: LineMatch) => (
                                        <StyledResultsCodeBlock key={createRandomId()}>
                                            <StyledResultsCodeTable>
                                                <tbody>
                                                    <tr>
                                                        {line.lineNumber && line.lineNumber > 0 &&
                                                        <>
                                                            <StyledResultsCodeLineNumber>{line.lineNumber}</StyledResultsCodeLineNumber>
                                                            <StyledResultsCodeLine>
                                                                {returnPreviousLine(result.file.content, line.lineNumber)}
                                                            </StyledResultsCodeLine>
                                                    </>}                                         
                                                    </tr>   
                                                    <tr>
                                                        <StyledResultsCodeLineNumber>{line.lineNumber + 1}</StyledResultsCodeLineNumber>
                                                        <StyledResultsCodeLine>
                                                            <Highlighter
                                                                input={line.preview}
                                                                matcher={currentQuery.current}
                                                            />
                                                        </StyledResultsCodeLine>
                                                    </tr>
                                                    <tr>
                                                        <StyledResultsCodeLineNumber>{line.lineNumber + 2}</StyledResultsCodeLineNumber>
                                                        <StyledResultsCodeLine>
                                                            {returnNextLine(result.file.content, line.lineNumber)}
                                                        </StyledResultsCodeLine>
                                                    </tr>  
                                                </tbody>
                                            </StyledResultsCodeTable>
                                        </StyledResultsCodeBlock>
                                    ))
                                )}
                            </StyledResultsCodeContainer>
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
