import { ResultsObject } from '@interfaces/Search'
import FileDocumentOutlineIcon from 'mdi-react/FileDocumentOutlineIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import React, { FunctionComponent } from 'react'

import {
    StyledResultsContainerHeader,
    StyledResultsContainerHeaderDivider,
    StyledResultsContainerHeaderTitle,
    StyledResultsFileName,
    StyledResultsFileNameLink,
    StyledResultsMatchCount,
    StyledIconWrapper,
} from './SearchResultsHeaderStyles'

interface Props {
    repository: string
    file?: string
    result: ResultsObject
}

const SearchResultsTable: FunctionComponent<Props> = props => {
    const file = props.file ?? ''
    return (
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
                        href={`https://${props.repository}/blob/main/${file}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                    {props.repository}
                    </StyledResultsFileNameLink>
                    {props.file && (
                        ` > ${props.file}`
                    )}                   
                </StyledResultsFileName>                                     
            </StyledResultsContainerHeaderTitle>
            <StyledResultsContainerHeaderDivider />
            {props.result.lineMatches && (
                <>
                    <StyledResultsMatchCount>{props.result.lineMatches.length > 1 
                        ? `${props.result.lineMatches.length} matches`
                        : '1 match'}
                    </StyledResultsMatchCount>
                    <StyledResultsContainerHeaderDivider />
                </>
            )}
        </StyledResultsContainerHeader>
    )
}

export default SearchResultsTable
