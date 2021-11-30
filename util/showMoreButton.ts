import LoadMoreHookObject from '@interfaces/LoadMoreHookObject'

const showMoreButton = (recordType: string, hook: LoadMoreHookObject, limit: number): boolean => 
    recordType === 'videos'
        ? limit !== hook.currentVideos?.length
        : limit !== hook.currentPosts?.length

export default showMoreButton
