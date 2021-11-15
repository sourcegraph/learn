import Button from '@components/atoms/Button'
import ContentCardList from '@components/atoms/ContentCardList'
import Header from '@components/Header'
import PageLayout from '@components/layouts/PageLayout'
import { ThemeContext } from '@hooks/contexts/theme'
import useLoadMore from '@hooks/loadMore'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import metaDataDefaults from '@lib/metaDataDefaults'
import { FunctionComponent, useContext } from 'react'

export interface Props {
    url: string
    headerText: string
    records: MarkdownFileWithUrl[]
}

const RecordIndexTemplate: FunctionComponent<Props> = props => {
    const metaTags = { ...metaDataDefaults, title: props.headerText, url: metaDataDefaults.url.concat(props.url) }
    const loadMoreHook = useLoadMore(props.records, 10)
    const theme = useContext(ThemeContext)

    return (
        <PageLayout metaTags={metaTags}>
            <Header
                headerText={props.headerText}
                isRecordIndex={true}
            />
            <ContentCardList records={loadMoreHook.currentRecords} />
            {props.records.length > 10 && loadMoreHook.records.length !== loadMoreHook.currentRecords.length && (
                <Button 
                    onClick={() => loadMoreHook.setPage(loadMoreHook.page + 10)}
                    className='outline-primary'
                    isDark={theme.theme === 'dark'}>
                    Load More
                </Button>
            )}
        </PageLayout>
    )
}

export default RecordIndexTemplate
