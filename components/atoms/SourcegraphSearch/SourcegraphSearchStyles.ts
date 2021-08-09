import styled from 'styled-components'

export const StyledSearchBody = styled.div`
    flex: 1 1 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    display: flex;
    padding: 1rem;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`
export const StyledSearchInput = styled.input`
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    color: #212529;
    display: block;
    font-family: monospace;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: .375rem 4rem .375rem .375rem;
    width: 100%;

    @media screen and (max-width: 1024px) {
        margin: 1rem 0;
    }
`
