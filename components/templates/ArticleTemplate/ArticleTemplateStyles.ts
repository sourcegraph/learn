import styled from 'styled-components'

export const StyledHeaderImage = styled.img`
    margin-bottom: 3rem;
    vertical-align: middle;
    width: 100%;
`
export const StyledAuthorByline = styled.p`
    color: #6c757d;
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
        background: #E7E7E7;
    }
    
    pre {
        background-color: #E7E7E7;
        overflow: auto;
        font-family: 'Monaco', monospace;
        padding: 10px;
        border-radius:10px;
    }

    img {
        max-width: 100%;
    }
    
    .reveal-on-hover-child {
      visibility: hidden;
    }
    
    .reveal-on-hover-parent:hover .reveal-on-hover-child {
      visibility: visible;
    }
`
