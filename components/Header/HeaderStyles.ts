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
    width: 40%;
`
export const StyledHeaderImage = styled.img`
    animation-name: ${logoAnimation};
    animation-duration: .5s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    margin-left: 20px;
    position: relative;
    top: -10px;
    width: fit-content;
`
export const StyledHeaderText = styled.div`
    height: fit-content;
    margin-left: 100px;
`
export const StyledHeaderTextContainer = styled.div`
    animation-delay: 2s;
    animation-duration: 800ms;
    font-size: 2.2rem;
    font-weight: 500;
    display: flex;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
    text-align: center;
    width: 60%;

    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 10%;
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
        height: 10%;
        background: #a112ff;
        animation: ${textAfter} 2s cubic-bezier(.77,0,.18,1) forwards;
        transform: translateX(-101%);
    }
`
