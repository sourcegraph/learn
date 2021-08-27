import HomepageTemplate, { Props as HomepageTemplateProps } from '@components/templates/HomepageTemplate'
import loadAllRecords from '@lib/loadAllRecords'
import omitUndefinedFields from '@util/omitUndefinedFields'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<HomepageTemplateProps> = async () => {
    const posts = await loadAllRecords('posts')

    return {
        props: {
            posts: posts.map(post => omitUndefinedFields({ ...post, url: `/${post.slug}` })),
        },
    }
}

export default HomepageTemplate
