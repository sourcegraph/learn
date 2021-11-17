import LoadMoreHookObject from '@interfaces/LoadMoreHookObject'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'

const showMoreButton = (videos: MarkdownFileWithUrl[] | null, posts: MarkdownFileWithUrl[] | null, recordType: string, hook: LoadMoreHookObject): boolean => {
    if (videos && recordType === 'videos') {
        return videos.length > 5 && hook.videos?.length !== hook.currentVideos?.length
    }
    if (posts && recordType !== 'videos') {
        return posts.length > 5 && hook.posts?.length !== hook.currentPosts?.length
    }

    return false
}

export default showMoreButton
