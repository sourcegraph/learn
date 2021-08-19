import styled from 'styled-components'

interface Props {
    anyHeaders?: boolean
}

export const StyledTocWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding-right: 1.5rem;

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

export const StyledHeaderTocItem = styled.li`
    padding: .8rem 0;
`
export const StyledTocItem = styled.li<Props>`
    margin: .5rem 1.5rem;
`
