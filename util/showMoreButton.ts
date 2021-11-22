import LoadMoreHookObject from '@interfaces/LoadMoreHookObject'

const showMoreButton = (recordType: string, hook: LoadMoreHookObject, limit: number): boolean => (
    recordType === 'videos'
        ? limit !== hook.videos?.length
        : limit !== hook.posts?.length
)

export default showMoreButton
