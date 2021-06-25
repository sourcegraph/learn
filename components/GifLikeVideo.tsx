import React from 'react'

/**
 * Gif-like video embed which has the characteristics of an animated Gif:
 * auto-played, looped, and muted.
 *
 * Using a video instead of a gif has performance advantages (smaller file size)
 * and accessibility advantages (like being pausable). Use cases include
 * screencast demonstrations or animations.
 */
const GifLikeVideo = (url: string, type = 'video/mp4') => (
    <video autoPlay loop muted playsInline className="my-5 mx-auto d-block" style={{ maxWidth: '100%' }}>
        <source src={url} type={type} />
    </video>
)

export default GifLikeVideo
