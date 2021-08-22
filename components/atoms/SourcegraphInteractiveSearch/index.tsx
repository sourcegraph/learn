import Button from '@components/atoms/Button'
import Highlighter from '@components/atoms/Highlighter'
import { ResultsObject, LineMatch } from '@interfaces/Search'
import createRandomId from '@util/createRandomId'
import { returnPreviousLine, returnNextLine }from '@util/returnLineMatchContext'
import useInteractiveSearch from 'hooks/interactiveSearch'
import FileDocumentOutlineIcon from 'mdi-react/FileDocumentOutlineIcon'
import GithubIcon from 'mdi-react/GithubIcon'
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
    StyledIconWrapper,
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
                search.results.map((result: ResultsObject) => (
                    <StyledResultsContainer key={createRandomId()}>
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
                                    <StyledResultsFileNameLink>
                                        {result.repository.name}
                                    </StyledResultsFileNameLink>
                                    {` > ${result.file.path}`}
                                </StyledResultsFileName>
                            </StyledResultsContainerHeaderTitle>
                            <StyledResultsContainerHeaderDivider />
                            <StyledResultsMatchCount>{result.lineMatches.length} matches</StyledResultsMatchCount>
                            <StyledResultsContainerHeaderDivider />
                        </StyledResultsContainerHeader>
                        <StyledResultsCodeContainer>
                            {result.lineMatches.length > 0 && (
                                result.lineMatches.map((line: LineMatch) => (
                                    <StyledResultsCodeBlock key={createRandomId()}>
                                        <StyledResultsCodeTable>
                                            <tbody>
                                                <tr>
                                                    {line.lineNumber > 0 &&
                                                    <>
                                                        <StyledResultsCodeLineNumber>{line.lineNumber - 2}</StyledResultsCodeLineNumber>
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
                ))                   
            )}
        </StyledResultsWrapper>
    )
}

export default SourcegraphInteractiveSearch
