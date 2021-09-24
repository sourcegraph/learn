import styled from 'styled-components'

export const StyledResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
`
export const StyledResultsCodeContainer = styled.div`
    font-family: monospace;
    color: #000000;
    overflow: scroll;
    padding: .25rem 0;
`
export const StyledResultsCodeTable = styled.table`
    border-collapse: collapse;
    border-spacing: 0px;
    table-layout: fixed;
    width: 34.35rem;
`
export const StyledResultsCodeBlock = styled.div`
    background: #e7e7e7;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    overflow-x: auto;
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
export const StyledSearchInput = styled.input`
    border: 1px solid #ced4da;
    border-radius: .25rem;
    font-family: monospace;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 1rem 0;
    width: 70%;
`
export const StyledResultsContainer = styled.div`
    width: 100%;
`
export const StyledInputSearchColumn = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`
export const StyledResultsBorder = styled.div`
    border-top: 1px solid #ced4da;
    height: 1rem;
    margin: 0 .25rem;
`
export const StyledInputButtton = styled.div`
    cursor: pointer;
    color: #fff;
    background-color: #5033e1;
    border-color: #5033e1;
    font-size: 12px;
    padding: .563rem;
`
export const StyledErrorMessageContainer = styled.div`
    background: #e7e7e7;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    padding: 1.875rem;
    text-align: center;
`

export const StyledSearchOnCloudContainer = styled.div`
    font-style: italic;
    margin: 1rem 0;

    span {
        font-style: normal;
    }
`
