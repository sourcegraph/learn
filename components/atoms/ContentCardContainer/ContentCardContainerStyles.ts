import styled from 'styled-components'

export const StyledCardContainerHeader = styled.h1`
    font-size: 36px;
    font-weight: 700;
    line-height: 1.2;
`
export const StyledCardContainerDescription = styled.p`
    font-size: 22px;
    line-height: 1.3;
    letter-spacing: 0.01em;
    margin-top: 16px;
`
export const StyledContentCardContainerWrapper = styled.div`
    justify-content: center;
    margin: 3rem 0 0;
    text-align: center;
    width: 100%;
`
export const StyledContentCardContainerCards = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`
