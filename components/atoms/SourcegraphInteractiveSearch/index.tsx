import FileDocumentOutlineIcon from 'mdi-react/FileDocumentOutlineIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import StarIcon from 'mdi-react/StarIcon'
import { FunctionComponent } from 'react'

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
    results?: Node
}

const SourcegraphInteractiveSearch: FunctionComponent<Props> = props => (
    <StyledResultsContainer>
        <StyledResultsContainerHeader>
            <FileDocumentOutlineIcon />
            <StyledResultsContainerHeaderDivider />
            <GithubIcon />
            <StyledResultsContainerHeaderTitle>
                <StyledResultsFileName>
                    <StyledResultsFileNameLink>

                    </StyledResultsFileNameLink>
                </StyledResultsFileName>
            </StyledResultsContainerHeaderTitle>
            <StyledResultsContainerHeaderDivider />
            <StyledResultsMatchCount></StyledResultsMatchCount>
            <StyledResultsContainerHeaderDivider />
            <StarIcon />
        </StyledResultsContainerHeader>
        <StyledResultsCodeContainer />
    </StyledResultsContainer>
)

export default SourcegraphInteractiveSearch