import { ResultsObject, LineMatch } from '@interfaces/Search'
import createRandomId from '@util/createRandomId'
import useInteractiveSearch from 'hooks/interactiveSearch'
import FileDocumentOutlineIcon from 'mdi-react/FileDocumentOutlineIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import StarIcon from 'mdi-react/StarIcon'
import { FunctionComponent, useState, useEffect } from 'react'

import {
    StyledResultsContainer,
    StyledResultsContainerHeader,
    StyledResultsContainerHeaderDivider,
    StyledResultsContainerHeaderTitle,
    StyledResultsFileName,
    StyledResultsFileNameLink,
    StyledResultsMatchCount,
    StyledResultsCodeTable,
    StyledResultsCodeContainer,
    StyledResultsCodeLineNumber,
    StyledResultsCodeLine,
} from './SourcegraphInteractiveSearchStyles'

interface Props {
    initialUrl: string
    initialAuthToken: string
    initialQuery: string
}

const SourcegraphInteractiveSearch: FunctionComponent<Props> = props => {
    const { initialUrl, initialAuthToken, initialQuery } = props
    const fetchedResults = useInteractiveSearch({ url: initialUrl, authToken: initialAuthToken, query: initialQuery })
    return (    
        <StyledResultsContainer>
           {fetchedResults?.results && (
                fetchedResults.results.map((result: ResultsObject, index: number) => (
                    
                        <div key={createRandomId()}>
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
                                    <StyledResultsCodeTable>
                                        <tbody>
                                            {result.lineMatches.map((line: LineMatch, index: number) => (
                                                <tr key={createRandomId()}>
                                                    <StyledResultsCodeLineNumber>{index + 1}</StyledResultsCodeLineNumber>
                                                    <StyledResultsCodeLine>
                                                        {line.preview}
                                                    </StyledResultsCodeLine>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </StyledResultsCodeTable>
                                )}
                            </StyledResultsCodeContainer>
                        </div>
                    
                ))                   
            )}
        </StyledResultsContainer>
    )
}

export default SourcegraphInteractiveSearch
