import SearchResultsTable from '@components/atoms/SearchResultsTable'
import { ResultsObject, LineMatch } from '@interfaces/Search'
import { FunctionComponent } from 'react'

import { StyledResultsCodeContainer } from './InteractiveSearchResultsStyles'

interface Props {
    result: ResultsObject
    lineMatches: LineMatch[]
    patternType: string
    query: string
}

const InteractiveSearchResults: FunctionComponent<Props> = props => (
    <StyledResultsCodeContainer>
        {props.lineMatches.length > 0 && (
            <SearchResultsTable
                matches={props.patternType === 'literal'
                    ? props.lineMatches.slice(0,4)
                    : props.lineMatches}
                result={props.result}
                patternType={props.patternType}
                query={props.query}
            />
        )}
    </StyledResultsCodeContainer>
)

export default InteractiveSearchResults
