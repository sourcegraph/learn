import HomepageTemplate, { Props as HomepageTemplateProps } from '@components/templates/HomepageTemplate'
import loadAllRecords from '@lib/loadAllRecords'
import omitUndefinedFields from '@util/omitUndefinedFields'
import returnHomepageContent from '@util/returnHomepageContent'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<HomepageTemplateProps> = async () => {
    const posts = await loadAllRecords('posts')
    const searchPosts = returnHomepageContent(posts, 'search')
    const sourcegraphPosts = returnHomepageContent(posts, 'sourcegraph')

    return {
        props: {
            searchPosts: searchPosts.map(post => omitUndefinedFields({ ...post, url: `/${post.slug}` })),
            sourcegraphPosts: sourcegraphPosts.map(video => omitUndefinedFields({ ...video, url: `/${video.slug}` })),
        },
    }
}

export default HomepageTemplate
