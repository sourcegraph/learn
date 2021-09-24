import styled from 'styled-components'

export const StyledResultsCodeTable = styled.table`
    border-collapse: collapse;
    border-spacing: 0px;
    table-layout: fixed;
    width: 34.35rem;
`
export const StyledResultsCodeLineNumber = styled.td`
    height: .88rem; 
    padding-right: .75rem;
    width: 5%;
`
export const StyledResultsCodeLine = styled.td`
    height: .88rem;
    vertical-align: middle;
    padding: 0 0 0 1rem;
    text-align: left;
    white-space: pre;
    word-break: break-all;
`
export const StyledResultsCodeBlock = styled.div`
    background: #e7e7e7;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    overflow-x: auto;
`
