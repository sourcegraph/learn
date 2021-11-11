import styled from 'styled-components'

export const StyledCardLink = styled.a`
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    margin: 0 .625rem 1.5rem;
    text-align: center;
    text-decoration: none;
    word-wrap: break-word;
    width: 100%;

    :hover {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.40);
    }

    @media screen and (max-width: 576px) {
        margin: .75rem;
        width: unset;
    }
`
