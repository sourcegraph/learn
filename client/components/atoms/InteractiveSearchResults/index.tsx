import Highlighter from '@components/atoms/Highlighter'
import { ResultsObject, LineMatch } from '@interfaces/Search'
import createRandomId from '@util/createRandomId'
import { returnPreviousLine, returnNextLine }from '@util/returnLineMatchContext'
import { FunctionComponent } from 'react'

import {
    StyledResultsCodeTable,
    StyledResultsCodeContainer,
    StyledResultsCodeBlock,
    StyledResultsCodeLineNumber,
    StyledResultsCodeLine,
} from './InteractiveSearchResultsStyles'

interface Props {
    result: ResultsObject
    lineMatches: LineMatch[]
    patternType: string
    query: string
}

const InteractiveSearchResults: FunctionComponent<Props> = props => (
    <StyledResultsCodeContainer>
        {props.lineMatches.length > 0 && (
            props.lineMatches.slice(0,4).map((line: LineMatch) => (
                <StyledResultsCodeBlock key={createRandomId()}>
                    <StyledResultsCodeTable>
                        <tbody>
                            <tr>
                                {line.lineNumber && line.lineNumber > 0 &&
                                <>
                                    <StyledResultsCodeLineNumber>{line.lineNumber}</StyledResultsCodeLineNumber>
                                    <StyledResultsCodeLine>
                                        {returnPreviousLine(props.result.file.content, line.lineNumber)}
                                    </StyledResultsCodeLine>
                            </>}                                         
                            </tr>   
                            <tr>
                                <StyledResultsCodeLineNumber>{line.lineNumber + 1}</StyledResultsCodeLineNumber>
                                <StyledResultsCodeLine>
                                    <Highlighter
                                        input={line.preview}
                                        matcher={props.query}
                                    />
                                </StyledResultsCodeLine>
                            </tr>
                            <tr>
                                <StyledResultsCodeLineNumber>{line.lineNumber + 2}</StyledResultsCodeLineNumber>
                                <StyledResultsCodeLine>
                                    {returnNextLine(props.result.file.content, line.lineNumber)}
                                </StyledResultsCodeLine>
                            </tr>  
                        </tbody>
                    </StyledResultsCodeTable>
                </StyledResultsCodeBlock>
            ))
        )}
    </StyledResultsCodeContainer>
)

export default InteractiveSearchResults
