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
    left: 0;
`

export const StyledTocWrapperBody = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: left;
    max-width: 15.62rem;
    padding-right: 1.5rem;
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
    
        a {
            color: #6c757d;
            opacity: .85;
            text-decoration: none;

            :hover {
                color: #000;
                opacity: 1;
            }
        }
    }
`

export const StyledHeaderTocItem = styled.li<Props>`
    background-color: ${props => props.isHighlighted
        ? '#edeafc'
        : '#fff'};
    padding: .4rem 0;
`
export const StyledTocItem = styled.li<Props>`
    background-color: ${props => props.isHighlighted
        ? '#edeafc'
        : '#fff'};
    padding: .2rem 1.5rem;
`
