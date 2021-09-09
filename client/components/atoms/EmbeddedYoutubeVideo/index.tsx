import { FunctionComponent } from 'react'

import { StyledEmbeddedVideoWrapper, StyledEmbeddedVideo } from './EmbeddedYoutubeVideoStyles'

interface Props {
    /**
     * Youtube video ID
     */
    id: string
}

const EmbeddedYoutubeVideo: FunctionComponent<Props> = props => (
    <StyledEmbeddedVideoWrapper>
        <StyledEmbeddedVideo
            title="Embedded YouTube Video"
            src={`https://www.youtube.com/embed/${props.id}`}
            allowFullScreen={true}
        />
    </StyledEmbeddedVideoWrapper>
)

export default EmbeddedYoutubeVideo
