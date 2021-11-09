import styled from 'styled-components'

export const StyledHeaderImage = styled.img`
    height: auto;
    margin-bottom: 3rem;
    vertical-align: middle;
    width: 100%;
`
export const StyledAuthorByline = styled.a`
    color: var(--text-color);
    margin: 0 0 0.5rem;
    text-decoration: none;

    :hover {
        color: var(--primary-link-color);
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

    pre {
        background-color: #e7e7e7;
        overflow: auto;
        font-family: 'Monaco', monospace;
        border-radius:10px;
        margin: .5rem 0;
        padding: 1.2rem .5rem;
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
