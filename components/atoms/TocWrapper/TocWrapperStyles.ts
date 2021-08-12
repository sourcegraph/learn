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
            margin: .8rem 0;

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
export const StyledNestedTocItem = styled.li`
    padding: 0px 0.8rem;
`

export const StyledHeaderTocItem = styled.li`
    margin: 1rem 0;
`
