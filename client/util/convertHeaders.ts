import TocHeader from '@interfaces/TocHeader'
import returnNestedHeaders from '@util/returnNestedHeaders'

const convertHeaders = (items: string[]): TocHeader[] => items.map(item => returnNestedHeaders(item))

export default convertHeaders
