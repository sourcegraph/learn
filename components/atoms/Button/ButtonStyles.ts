import styled from 'styled-components'

interface Props {
    isDark?: boolean
}

export const StyledButton = styled.a<Props>`
    align-items: center;
    background-color: transparent;
    border-radius: .25rem;
    border: 1px solid transparent;
    color: var(--text-color);
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
        color: ${props => props.isDark
            ? '#212529'
            : '#fff'};
        background-color: var(--primary-link-color);
        border-color: var(--primary-link-color);

        :hover {
            color: var(--primary-link-color);
            background-color: transparent;
            border-color: var(--primary-link-color);
        }
    }

    &.small {
        font-size: 12px;
        padding: .563rem;
    }

    &.outline-primary {
        color: var(--primary-link-color);
        border-color: var(--primary-link-color);

        :hover {
            background-color: var(--primary-link-color);
            border-color: var(--primary-link-color);
            color: ${props => props.isDark
                ? '#212529'
                : '#fff'};
        }

        @media screen and (max-width: 768px) {
            margin-top: .3125rem;
        }
    }

    &.extra-small {
        color: ${props => props.isDark
            ? '#212529'
            : '#fff'};
        background-color: var(--primary-link-color);
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
            color: ${props => props.isDark
                ? '#212529'
                : 'var(--primary-link-color)'};
            background-color: #fff;
            border-color: var(--primary-link-color);
        }
    }

    &.flex {
        display: flex;
        padding: .375rem .5rem;

        :hover {
          color: var(--primary-link-color);  
        }
    }
`
