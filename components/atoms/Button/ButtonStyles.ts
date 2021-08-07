import styled from 'styled-components'

export const StyledButton = styled.a`
    background-color: transparent;
    border-radius: .25rem;
    border: 1px solid transparent;
    color: #212529;
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
        background-color: #0d6efd;
        border-color: #0d6efd;
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
        color: #0d6efd;
        border-color: #0d6efd;

        :hover {
            background-color: #0d6efd;
            border-color: #0d6efd;
            color: #fff;
        }

        @media screen and (max-width: 768px) {
            margin-top: .3125rem;
        }
    }
`
