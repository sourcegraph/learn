import React from 'react'

import { StyledEmbeddedVideoWrapper, StyledEmbeddedVideo } from './EmbeddedYoutubeVideoStyles'

interface Props {
    /**
     * Youtube video ID
     */
    id: string
}

const EmbeddedYoutubeVideo: React.FunctionComponent<Props> = props => (
    <StyledEmbeddedVideoWrapper>
        <StyledEmbeddedVideo
            title="Embedded Youtube Video"
            src={`https://www.youtube.com/embed/${props.id}`}
            allowFullScreen={true}
        />
    </StyledEmbeddedVideoWrapper>
)

export default EmbeddedYoutubeVideo
