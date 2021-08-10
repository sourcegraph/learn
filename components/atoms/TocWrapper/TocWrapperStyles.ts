import styled from 'styled-components'

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
        padding: 0 .8rem;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0 .8rem;
    
        li {
            padding: .4rem 0;

            p {
                padding: 0;
            }

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
    }
`
