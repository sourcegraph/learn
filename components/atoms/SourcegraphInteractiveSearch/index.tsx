import Button from '@components/atoms/Button'
import { ResultsObject, LineMatch } from '@interfaces/Search'
import createRandomId from '@util/createRandomId'
import useInteractiveSearch from 'hooks/interactiveSearch'
import FileDocumentOutlineIcon from 'mdi-react/FileDocumentOutlineIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import StarIcon from 'mdi-react/StarIcon'
import { FunctionComponent, useRef } from 'react'

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
    StyledInputButtton,
} from './SourcegraphInteractiveSearchStyles'

interface Props {
    initialUrl: string
    initialAuthToken: string
    initialQuery: string
}

const SourcegraphInteractiveSearch: FunctionComponent<Props> = props => {
    const { initialUrl, initialAuthToken, initialQuery } = props
    const currentQuery = useRef(initialQuery) 
    const search = useInteractiveSearch({ initialUrl, initialAuthToken, initialQuery })
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
           {search?.results && (
                search.results.map((result: ResultsObject, index: number) => (
                    <StyledResultsContainer key={createRandomId()}>
                        <StyledResultsContainerHeader>
                            <FileDocumentOutlineIcon />
                            <StyledResultsContainerHeaderDivider />
                            <GithubIcon />
                            <StyledResultsContainerHeaderTitle>                    
                                <StyledResultsFileName>
                                    <StyledResultsFileNameLink>
                                        {result.repository.name}
                                    </StyledResultsFileNameLink>
                                    {` > ${result.file.path}`}
                                </StyledResultsFileName>
                            </StyledResultsContainerHeaderTitle>
                            <StyledResultsContainerHeaderDivider />
                            <StyledResultsMatchCount>{index + 1}</StyledResultsMatchCount>
                            <StyledResultsContainerHeaderDivider />
                            <StarIcon />
                        </StyledResultsContainerHeader>
                        <StyledResultsCodeContainer>
                            {result.lineMatches.length > 0 && (
                                result.lineMatches.map((line: LineMatch) => (
                                    <StyledResultsCodeBlock key={createRandomId()}>
                                        <StyledResultsCodeTable>
                                            <tbody>   
                                                <tr>
                                                    <StyledResultsCodeLineNumber>{line.lineNumber + 1}</StyledResultsCodeLineNumber>
                                                    <StyledResultsCodeLine>
                                                        {line.preview.trim()}
                                                    </StyledResultsCodeLine>
                                                </tr>  
                                            </tbody>
                                        </StyledResultsCodeTable>
                                    </StyledResultsCodeBlock>
                                ))
                            )}
                        </StyledResultsCodeContainer>
                    </StyledResultsContainer>
                ))                   
            )}
        </StyledResultsWrapper>
    )
}

export default SourcegraphInteractiveSearch
