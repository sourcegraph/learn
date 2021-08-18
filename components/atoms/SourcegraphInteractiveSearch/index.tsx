import { HookResultsObject } from '@interfaces/Search'
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
} from './SourcegraphInteractiveSearchStyles'

interface Props {
    initialUrl: string
    initialAuthToken: string
    initialQuery: string
}

/* function DoFetch(url: string, authToken: string, query: string): HookResultsObject | undefined {
    const [results, setResults] = useState<HookResultsObject | undefined>()
    useEffect(() => {
        const FetchResults = (): void => {
          setResults(useInteractiveSearch({ url, authToken, query }))
        }
        FetchResults()
      }, [])
      return results
} */

const SourcegraphInteractiveSearch: FunctionComponent<Props> = props => {
    const { initialUrl, initialAuthToken, initialQuery } = props
    const fetchedResults = useInteractiveSearch({ url: initialUrl, authToken: initialAuthToken, query: initialQuery })
    const [results, setResults] = useState<HookResultsObject | undefined>(fetchedResults)
    /* useEffect(() => {
        setResults(fetchedResults)
    }, []) */
    // const [results, setResults] = useState<HookResultsObject | undefined>()
    /* useEffect(() => {
        if (!results) {
            const fetchResults = (): void => {
                setResults(useInteractiveSearch({ url: initialUrl, authToken: initialAuthToken, query: initialQuery }))
            }
            fetchResults()
        }
      }, []) */
    //const results = useInteractiveSearch({ initialUrl, initialAuthToken, initialQuery })
    //const [results, setResults] = useState(newResults)
    //console.log(results)
    return (
        <StyledResultsContainer>
            <StyledResultsContainerHeader>
                <FileDocumentOutlineIcon />
                <StyledResultsContainerHeaderDivider />
                <GithubIcon />
                <StyledResultsContainerHeaderTitle>
                    <StyledResultsFileName>
                        <StyledResultsFileNameLink>
                            {fetchedResults?.results?.repository.name}
                        </StyledResultsFileNameLink>
                        {` > ${fetchedResults?.results?.file.path}`}
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
