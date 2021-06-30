import { isPlainObject } from 'lodash'

/**
 * Returns a copy of the object which does not contain any fields that have a value of `undefined`. Those fields are omitted entirely in the returned object.
 *
 * This is a workaround for the limitation of Next.js in which undefined fields throw an error during serialization.
 *
 * Next.js discussion: https://github.com/vercel/next.js/discussions/11209
 */
export default function omitUndefinedFields<T>(object: T): T {
    return Object.fromEntries(
        Object.entries(object)
            .filter(([, value]) => value !== undefined)
            .map(([key, value]) => {
                if (isPlainObject(value)) {
                    return [key, omitUndefinedFields(value)]
                }
                return [key, value]
            })
    ) as T
}
