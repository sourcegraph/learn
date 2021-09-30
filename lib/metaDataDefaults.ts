import MetaTags from '@interfaces/MetaTags'

const metaDataDefaults: MetaTags = {
    title: 'Sourcegraph Learn',
    image: 'https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png',
    description: 'Sourcegraph Learn is an educational hub to support all developers.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_URL ?? 'https://learn.sourcegraph.com'
}

export default metaDataDefaults
