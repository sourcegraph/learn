import FileDocumentOutlineIcon from 'mdi-react/FileDocumentOutlineIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import StarIcon from 'mdi-react/StarIcon'
import { FunctionComponent, useState, useEffect } from 'react'
import { fetchResults } from '@lib/fetch'

import {
    StyledResultsContainer,
    StyledResultsContainerHeader,
    StyledResultsContainerHeaderDivider,
    StyledResultsContainerHeaderTitle,
    StyledResultsFileName,
    StyledResultsFileNameLink,
    StyledResultsMatchCount,
    StyledResultsCodeContainer,
} from './SourcegraphInteractiveSearchStyles'

interface Props {
    searchInterface?: SearchInterface
    query?: string
}

interface SearchInterface {
    url: string
    auth: string
}

interface ResultsObject {
    typeName: string
    repository: RepositoryMatch
    file: FileMatch
    lineMatches: Node
}

interface RepositoryMatch {
    name: string
    url: string
}

interface FileMatch {
    path: string
    url: string
    commit: Node
}

const SourcegraphInteractiveSearch: FunctionComponent<Props> = props => {
    const [initialResults, setInitialResults] = useState()
    useEffect(() => (
        setInitialResults(fetchResults(props.searchInterface?.url, props.searchInterface?.auth, props.query?))
    ))

    return (
        <StyledResultsContainer>
            <StyledResultsContainerHeader>
                <FileDocumentOutlineIcon />
                <StyledResultsContainerHeaderDivider />
                <GithubIcon />
                <StyledResultsContainerHeaderTitle>
                    <StyledResultsFileName>
                        <StyledResultsFileNameLink>
                            {props.results?.file.url}
                        </StyledResultsFileNameLink>
                        {props.results?.file.path}
                    </StyledResultsFileName>
                </StyledResultsContainerHeaderTitle>
                <StyledResultsContainerHeaderDivider />
                <StyledResultsMatchCount>1</StyledResultsMatchCount>
                <StyledResultsContainerHeaderDivider />
                <StarIcon />
            </StyledResultsContainerHeader>
            <StyledResultsCodeContainer />
        </StyledResultsContainer>
    )
}

export default SourcegraphInteractiveSearch
