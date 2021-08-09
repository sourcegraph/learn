import SignDirectionIcon from 'mdi-react/SignDirectionIcon'
import React, { FunctionComponent } from 'react'

import { StyledErrorPageWrapper, StyledErrorPageText } from './ErrorTemplateStyles'

const ErrorTemplate: FunctionComponent = () => (
    <StyledErrorPageWrapper>
        <div>
            <div>
                <SignDirectionIcon />
            </div>
        </div>
        <h1>404: Not Found</h1>
        <StyledErrorPageText>
            The requested URL was not found. <br /> Return to{' '}
            <a href="https://learn.sourcegraph.com">Sourcegraph Learn</a>
        </StyledErrorPageText>
    </StyledErrorPageWrapper>

)

export default ErrorTemplate
