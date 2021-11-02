import styled from 'styled-components'

export const StyledHeaderImage = styled.img`
    height: auto;
    margin-bottom: 3rem;
    vertical-align: middle;
    width: 100%;
`
export const StyledAuthorByline = styled.a`
    color: #212529;
    margin: 0 0 0.5rem;
    text-decoration: none;

    :hover {
        color: #5033e1;
    }
`

export const StyledTitle = styled.h1`
    overflow-wrap: break-word;
`

export const StyledDates = styled.div`
    font-size: 12px;
    margin: 0 0 1rem;
`

export const StyledTagsWrapper = styled.div`
    margin-bottom: 1.5rem;
`
export const StyledMarkdownWrapper = styled.div`
    code {
        font-family: monospace;
        font-size: inherit;
        color: #000000;
        background: #e7e7e7;
        overflow: scroll;
    }

    p {
        overflow-wrap: break-word;
    }

    span {
        overflow: scroll;
    }

    pre {
        background-color: #e7e7e7;
        display: flex;
        overflow: auto;
        font-family: 'Monaco', monospace;
        padding: 10px;
        border-radius:10px;
        margin: .5rem 0;
    }

    img {
        max-width: 100%;
    }

    a {
        color: #3826cc;
        text-decoration: none;
    }
    
    .reveal-on-hover-child {
      visibility: hidden;
    }
    
    .reveal-on-hover-parent:hover .reveal-on-hover-child {
      visibility: visible;
    }
`
