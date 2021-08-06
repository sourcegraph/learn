import styled from 'styled-components'

export const StyledTocWrapper = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }

    h5 {
        padding: 0 0 10px 32px;
    }

    ul {
        list-style-type: none;
    
        li {
            padding-bottom: 10px;

            a {
                text-decoration: none;
            }
        }
    }
`
