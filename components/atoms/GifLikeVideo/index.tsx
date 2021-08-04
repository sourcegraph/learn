import React from 'react'

import { StyledVideo } from './GifLikeVideoStyles'

interface Props {
    url: string
    type?: string
}

/**
 * Gif-like video embed which has the characteristics of an animated Gif:
 * auto-played, looped, and muted.
 *
 * Using a video instead of a gif has performance advantages (smaller file size)
 * and accessibility advantages (like being pausable). Use cases include
 * screencast demonstrations or animations.
 */
const GifLikeVideo: React.FunctionComponent<Props> = props => (
    <StyledVideo
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
    >
        <source src={props.url} type={props.type ?? 'video/mp4'} />
    </StyledVideo>
)

export default GifLikeVideo
