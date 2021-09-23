import Highlighter from '@components/atoms/Highlighter'
import { ResultsObject, LineMatch } from '@interfaces/Search'
import createRandomId from '@util/createRandomId'
import { returnPreviousLine, returnNextLine }from '@util/returnLineMatchContext'
import { FunctionComponent } from 'react'

import {
    StyledResultsCodeTable,
    StyledResultsCodeLineNumber,
    StyledResultsCodeLine,
    StyledResultsCodeBlock,
} from './SearchResultsTableStyles'

interface Props {
    result: ResultsObject
    matches: LineMatch[]
    patternType: string
    query: string
}

const SearchResultsTable: FunctionComponent<Props> = props => (
    <>
        {props.patternType === 'literal' ?
            (props.matches.map(match => (
                <StyledResultsCodeBlock key={createRandomId()}>
                    <StyledResultsCodeTable>
                        <tbody>
                            <tr>
                                {match.lineNumber && match.lineNumber > 0 &&
                                <>
                                    <StyledResultsCodeLineNumber>{match.lineNumber}</StyledResultsCodeLineNumber>
                                    <StyledResultsCodeLine>
                                        {returnPreviousLine(props.result.file.content, match.lineNumber)}
                                    </StyledResultsCodeLine>
                            </>}                                         
                            </tr>   
                            <tr>
                                <StyledResultsCodeLineNumber>{match.lineNumber + 1}</StyledResultsCodeLineNumber>
                                <StyledResultsCodeLine>
                                    <Highlighter
                                        input={match.preview}
                                        matcher={props.query}
                                    />
                                </StyledResultsCodeLine>
                            </tr>
                            <tr>
                                <StyledResultsCodeLineNumber>{match.lineNumber + 2}</StyledResultsCodeLineNumber>
                                <StyledResultsCodeLine>
                                    {returnNextLine(props.result.file.content, match.lineNumber)}
                                </StyledResultsCodeLine>
                            </tr>  
                        </tbody>
                    </StyledResultsCodeTable>
                </StyledResultsCodeBlock>
            ))
        )
        : (
            <StyledResultsCodeBlock key={createRandomId()}>
                <StyledResultsCodeTable>
                    <tbody>
                        <tr>
                            {props.matches[0].lineNumber && props.matches[0].lineNumber > 0 &&
                            <>
                                <StyledResultsCodeLineNumber>{props.matches[0].lineNumber}</StyledResultsCodeLineNumber>
                                <StyledResultsCodeLine>
                                    {returnPreviousLine(props.result.file.content, props.matches[0].lineNumber)}
                                </StyledResultsCodeLine>
                        </>}                                         
                        </tr>
                        {props.matches.map(match => (
                            <tr key={createRandomId()}>
                                <StyledResultsCodeLineNumber>{match.lineNumber + 1}</StyledResultsCodeLineNumber>
                                <StyledResultsCodeLine>
                                    <Highlighter
                                        input={match.preview}
                                        matcher={props.query}
                                    />
                                </StyledResultsCodeLine>
                            </tr>
                                
                        ))}   
                        <tr>
                            <StyledResultsCodeLineNumber>{props.matches[props.matches.length - 1].lineNumber + 2}</StyledResultsCodeLineNumber>
                            <StyledResultsCodeLine>
                                {returnNextLine(props.result.file.content, props.matches[props.matches.length - 1].lineNumber)}
                            </StyledResultsCodeLine>
                        </tr>  
                    </tbody>
                </StyledResultsCodeTable>
            </StyledResultsCodeBlock>
        )}
    </>
)

export default SearchResultsTable
