import styled from 'styled-components'

export const StyledSearchForm = styled.form`
    height: 2.25rem;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: .375rem;
    background: transparent;
    border: 1px solid #e7e7e7;
    color: #e7e7e7;
    font-size: 1rem;
    justify-content: space-evenly;
    margin: 0 .625rem;

    @media screen and (max-width: 1024px) {
        margin: .5rem 0;
    }

    input {
        display: inline-block;
        width: 12.5rem;
        height: 1rem;
        padding: 0 2.5rem 0 .3125rem;
        border: transparent;
        font-weight: 400;
        color: var(--text-color);
        font-size: 14px;
        line-height: 1rem;
        box-sizing: content-box;
        background: transparent;
        background-clip: padding-box;
        border-radius: .3125rem;
        box-shadow: none;
        font-family: sans-serif;
        opacity: .8;
    }

    svg {
        margin: 0 .625rem;
    }
`

export const StyledKeyboardInput = styled.kbd`
    border: 1px solid #e7e7e7;
    color: var(--text-color);
    background: transparent;
    font-size: .875em;
    padding: .125em .375em;
    border-radius: .25rem;
    width: 1.5625rem;
    margin: .625rem;
`
