import { ParsedUrlQuery } from 'querystring'

export default function getQueryParameter(parameters: ParsedUrlQuery | undefined, name: string): string {
    if (!parameters) {
        throw new Error('getQueryParam: No params provided')
    }
    let value = parameters[name]
    if (Array.isArray(value)) {
        value = value[0]
    }
    if (!value) {
        throw new Error(`getQueryParam: Missing param value "${name}"`)
    }
    return value
}
