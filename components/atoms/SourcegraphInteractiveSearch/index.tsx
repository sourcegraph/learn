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
            <StyledResultsContainerHeader>
                <FileDocumentOutlineIcon />
                <StyledResultsContainerHeaderDivider />
                <GithubIcon />
                <StyledResultsContainerHeaderTitle>
                {fetchedResults?.results && (
                    <StyledResultsFileName>
                        <StyledResultsFileNameLink>
                            {fetchedResults.results.repository.name}
                        </StyledResultsFileNameLink>
                        {` > ${fetchedResults.results.file.path}`}
                    </StyledResultsFileName>
                )}
                </StyledResultsContainerHeaderTitle>
                <StyledResultsContainerHeaderDivider />
                <StyledResultsMatchCount>1</StyledResultsMatchCount>
                <StyledResultsContainerHeaderDivider />
                <StarIcon />
            </StyledResultsContainerHeader>
            <StyledResultsCodeContainer>
                {fetchedResults.results && fetchedResults.results.lineMatches.length > 0 && (
                    <table>
                        <tbody>
                            {fetchedResults.results?.lineMatches.map((line, index) => (
                                <tr key={createRandomId()}>
                                    <StyledResultsCodeLineNumber>{index + 1}</StyledResultsCodeLineNumber>
                                    <StyledResultsCodeLine>
                                        {line.preview}
                                    </StyledResultsCodeLine>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </StyledResultsCodeContainer>
        </StyledResultsContainer>
    )
}

export default SourcegraphInteractiveSearch
