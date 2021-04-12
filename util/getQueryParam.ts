import { ParsedUrlQuery } from 'querystring'

export default function getQueryParam(params: ParsedUrlQuery | undefined, name: string): string {
    if (!params) {
        throw new Error('getQueryParam: No params provided')
    }
    let value = params[name]
    if (Array.isArray(value)) {
        value = value[0]
    }
    if (!value) {
        throw new Error(`getQueryParam: Missing param value "${name}"`)
    }
    return value
}
