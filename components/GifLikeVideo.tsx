import React from 'react'

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
const GifLikeVideo = (props: Props) => (
    <video autoPlay={true} loop={true} muted={true} playsInline={true} className="my-5 mx-auto d-block" style={{ maxWidth: '100%' }}>
        <source src={props.url} type={props.type ?? 'video/mp4'} />
    </video>
)

export default GifLikeVideo
