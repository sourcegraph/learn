import styled from 'styled-components'

export const StyledEmbeddedVideoWrapper = styled.div`
    padding-top: 56%;
    margin-bottom: 3rem;
    position: relative;
    width: 100%;

    & > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`
export const StyledEmbeddedVideo = styled.iframe`
    border: 0;
`
