import styled, { keyframes } from 'styled-components'

const logoAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    
    to {
        transform: rotate(360deg);
    }
`;

const textBefore = keyframes`
    0% {
        transform: translateX(0)
    }

    100% {
        transform: translateX(200%)
    }
`
const textAfter = keyframes`
    0% {
        transform: translateX(-100%)
    }

    100% {
        transform: translateX(101%)
    }
`
export const StyledHeaderImageContainer = styled.div`
    position: relative;
    width: 30%;
`
export const StyledHeaderImage = styled.img`
    animation-name: ${logoAnimation};
    animation-duration: .5s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    margin-left: .625rem;
    position: relative;
    width: fit-content;
`
export const StyledHeaderText = styled.div`
    height: fit-content;
    margin-left: 6.25rem;
`
export const StyledHeaderTextContainer = styled.div`
    font-size: 2.2rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    position: relative;
    text-align: center;
    width: 100%;
`
export const StyledHeaderTextContainerAnimated = styled(StyledHeaderTextContainer)`
    animation-delay: 2s;
    animation-duration: 800ms;
    justify-content: flex-end;
    overflow: hidden;
    width: 70%;

    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background: #fff;
        animation: ${textBefore} 2s cubic-bezier(.77,0,.18,1) forwards;
        transform: translateX(0);
    }

    :after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background: #a112ff;
        animation: ${textAfter} 2s cubic-bezier(.77,0,.18,1) forwards;
        transform: translateX(-101%);
    }
`
export const StyledHeaderSharedContainer = styled.div`
    align-items: center;
    display: flex;
    width: 100%;

    @media screen and (max-width: 768px) {
        margin-top: 3.125rem;
    }
`
