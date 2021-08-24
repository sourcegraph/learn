import styled from 'styled-components'

interface Props {
    isHighlighted?: boolean
}

export const StyledTocWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding-right: 1.5rem;
    position: fixed;
    top: 20;

    @media screen and (max-width: 768px) {
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
    padding: .8rem 0;
`
export const StyledTocItem = styled.li<Props>`
    background-color: ${props => props.isHighlighted
        ? '#edeafc'
        : '#fff'};
    margin: .5rem 1.5rem;
`
