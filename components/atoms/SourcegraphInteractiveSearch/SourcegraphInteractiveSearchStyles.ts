import styled from 'styled-components'

export const StyledResultsContainer = styled.div`
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    margin-right: 1rem;
`

export const StyledResultsContainerHeader = styled.div`
    padding: .5rem 0;
    display: flex;
    align-items: center;
    white-space: nowrap;
`
export const StyledResultsContainerHeaderDivider = styled.div`
    border-right: 1px solid #000;
    height: 1rem;
    margin: 0 .25rem;
`
export const StyledResultsContainerHeaderTitle = styled.div`
    flex: 1 1 auto;
    overflow: hidden;
    display: flex;
`
export const StyledResultsFileName = styled.div`
    margin-left: .25rem;
`

export const StyledResultsFileNameLink = styled.a`
    text-decoration: none;
`
export const StyledResultsMatchCount = styled.div`
    font-size: .75rem;
    margin-right: .25rem;
`
export const StyledResultsCodeContainer = styled.div`
    font-family: monospace;
    color: #000000;
    background: #e7e7e7;
    border-radius: .187rem;
    padding: .25rem 0;
`
export const StyledResultsCodeLineNumber = styled.td`
    height: .88rem; 
    padding: 0;
    min-width: 1.5rem;
    text-align: right;
    vertical-align: middle;
`
export const StyledResultsCodeLine = styled.td`
    height: .88rem;
    vertical-align: middle;
    padding: 0 0 0 1rem;
    white-space: pre;
`
