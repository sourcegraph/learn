import HomepageTemplate, { Props as HomepageTemplateProps } from '@components/templates/HomepageTemplate'
import { PageData } from '@interfaces/PageData'
import { getPageData } from '@lib/api/getPageData'
import filterRecordsWithTag from '@util/filterRecordsWithTag'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<HomepageTemplateProps> = async () => {
    const totalRecords = await getPageData() as PageData
    const posts = totalRecords.records.posts ?? []
    const searchPosts = filterRecordsWithTag(posts, 'search').records.slice(0, 3)
    const sourcegraphPosts = filterRecordsWithTag(posts, 'sourcegraph').records.slice(0, 3)

    return {
        props: {
            searchPosts,
            sourcegraphPosts,
        },
    }
}

export default HomepageTemplate
