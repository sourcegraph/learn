import styled from 'styled-components'

export const StyledButton = styled.a`
    background-color: transparent;
    border-radius: .25rem;
    border: 1px solid transparent;
    color: #000;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: .375rem .75rem;
    text-align: center;
    text-decoration: none;
    user-select: none;
    vertical-align: middle;

    :hover {
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

    &.primary {
        color: #fff;
        background-color: #5033e1;
        border-color: #5033e1;

        :hover {
            color: #5033e1;
            background-color: #fff;
            border-color: #5033e1;
        }
    }

    &.small {
        font-size: 12px;
        padding: .563rem;
    }

    &.header-cta {
        color: white;
        background-color: #a112ff;
        max-width: 50%;
    }

    &.outline-primary {
        color: #5033e1;
        border-color: #5033e1;

        :hover {
            background-color: #5033e1;
            border-color: #5033e1;
            color: #fff;
        }

        @media screen and (max-width: 768px) {
            margin-top: .3125rem;
        }
    }

    &.extra-small {
        color: #fff;
        background-color: #5033e1;
        border-radius: .25rem;
        display: inline-block;
        font-size: .75em;
        font-weight: 700;
        line-height: 1;
        padding: .35em .65em;
        margin-right: .25rem;
        text-decoration: none;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;

        :hover {
            color: #5033e1;
            background-color: #fff;
            border-color: #5033e1;
        }
    }
`
