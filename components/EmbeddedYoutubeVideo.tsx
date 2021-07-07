import React from 'react'

interface Props {
    /**
     * Youtube video ID
     */
    id: string
}

const EmbeddedYoutubeVideo: React.FunctionComponent<Props> = props => (
    <div className="ratio ratio-16x9 mb-5">
        <iframe
            title="Embedded Youtube Video"
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${props.id}`}
            allowFullScreen={true}
        />
    </div>
)

export default EmbeddedYoutubeVideo
