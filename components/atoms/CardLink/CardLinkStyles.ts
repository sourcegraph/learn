import styled from 'styled-components'

interface Props {
    setHeight?: boolean
}

export const StyledCardLink = styled.a<Props>`
    cursor: pointer;
    height: 100%;
    max-height: 377px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    background-color: var(--background-color);
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    margin: 0 .625rem 1.5rem;
    text-align: center;
    text-decoration: none;
    word-wrap: break-word;
    width: 100%;
    min-height: ${props => props.setHeight
        ? '11.25rem'
        :''};

    :hover {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.40);
    }

    @media screen and (max-width: 576px) {
        margin: .75rem;
        width: unset;
    }

    @media screen and (max-width: 768px) {
        max-height: unset;
    }
`
