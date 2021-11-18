import styled from 'styled-components'

interface Props {
    isDark?: boolean
}

export const StyledErrorPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% 0;
`
export const StyledErrorPageText = styled.p<Props>`
    color: var(--text-color);
    margin: 0 0 1rem;
    text-align: center;
    font-size: 18px;

    a {
        color: var(--primary-link-color);
        text-decoration: none;

        :hover {
            color: ${props => props.isDark
                ? '#5033e1'
                : '#bfbfff'};
        }
    }
`
export const StyledErrorPageImageHeader = styled.div`
    background: linear-gradient(#c7ffff, #c4ffe8);
    padding: 1.5rem;
`
export const StyledHeaderText = styled.h1`
    font-size: 42px;
    margin: 1rem;
`
