import React from 'react'

const creativeCommonsUrl = 'https://creativecommons.org/licenses/by-nc-sa/4.0/'

const CreativeCommonsNotice: React.FunctionComponent = () => (
    <div className="my-3">
        <div className="mb-3 text-muted small">
            This work is licensed under a{' '}
            <a href={creativeCommonsUrl} className="text-dark text-decoration-none text-muted">
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
            </a>
        </div>
        <a href={creativeCommonsUrl}>
            <img alt="Creative Commons badge" className="d-block" width="80" src="/creative-commons-by-nc-sa.svg" />
        </a>
    </div>
)

export default CreativeCommonsNotice
