import React from 'react'

interface Props {
    /**
     * Youtube video ID
     */
    id: string
}

const EmbeddedYoutubeVideo = (props: Props) => (
    <div className="ratio ratio-16x9">
        <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${props.id}`}
            allowFullScreen
        ></iframe>
    </div>
)

export default EmbeddedYoutubeVideo
