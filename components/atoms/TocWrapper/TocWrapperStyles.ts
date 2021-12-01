import styled from 'styled-components'

interface Props {
    isHighlighted?: boolean
    setTop?: boolean
}

export const StyledTocTopWrapper = styled.div`
    position: relative;
    z-index: 4;
`

export const StyledTocWrapper = styled.div`
    position: absolute;
    left: 1rem;
`

export const StyledTocWrapperBody = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: left;
    max-width: 11.4rem;
    position: fixed;
    top: ${props => props.setTop
        ? '.3125rem'
        : ''};

    @media screen and (max-width: 1024px) {
        display: none;
    }

    h5 {
        font-size: 1.25rem;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
`

export const StyledHeaderTocItem = styled.li<Props>`
    background-color: ${props => props.isHighlighted
        ? '#edeafc'
        : 'transparent'};
    padding: .4rem 0;

    a {
        opacity: .55;
        text-decoration: none;
        color: ${props => props.isHighlighted
            ? '#212529'
            : 'var(--text-color)'};

        :hover {
            opacity: 1;
            color: ${props => props.isHighlighted
                ? '#212529'
                : 'var(--text-color)'};
        }
    }
`
export const StyledTocItem = styled.li<Props>`
    background-color: ${props => props.isHighlighted
        ? '#edeafc'
        : 'transparent'};
    padding: .2rem 1.5rem;

    a {
        opacity: .55;
        text-decoration: none;
        color: ${props => props.isHighlighted
            ? '#212529'
            : 'var(--text-color)'};

        :hover {
            opacity: 1;
            color: ${props => props.isHighlighted
                ? '#212529'
                : 'var(--text-color)'};
        }
    }
`
