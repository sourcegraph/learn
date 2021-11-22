import { promises as fs } from 'fs'
import path from 'path'

import { PageData, Records } from '@interfaces/PageData'
import fetchPageData from '@lib/api/fetchPageData'

export const getPageData = async (page?: number | null, type?: string): Promise<PageData | Records> => {
    const CACHE_PATH = path.join(process.cwd(), '/public/builds/globalData.json')
    let cachedData: PageData

    try {
        cachedData = JSON.parse(await fs.readFile(CACHE_PATH, 'utf8')) as PageData

        if (Object.keys(cachedData).length === 0) {
            const data = await fetchPageData()
    
            try {
                await fs.writeFile(
                    CACHE_PATH,
                    JSON.stringify(data),
                )
            } catch (error) {
                throw new Error(`error: ${String(error)}`)
            }
    
            cachedData = data
        }
    } catch (error) {
        throw new Error(`error: ${String(error)}`)
    }

    if (page && type) {
        if (type === 'posts') {
            return {
                posts: cachedData.records.posts?.slice(0, page),
                totalRecords: cachedData.records.posts?.length,
            }
        }
        return {
            videos: cachedData.records.videos?.slice(0, page),
            totalRecords: cachedData.records.videos?.length,
        }
    }

    return cachedData
}

export const getCachedData = async (page?: number | null, type?: string): Promise<PageData | Records> => {
    const data = fetch('../../builds/globalData.json')
        .then(response => response.json())
        .catch(error => {
            throw new Error(`error: ${String(error)}`)
        })
        .then((response: PageData) => {
            if (page && type) {
                if (type === 'posts') {
                    return {
                        posts: response.records.posts?.slice(0, page),
                        totalRecords: response.records.posts?.length,
                    }
                }
                return {
                    videos: response.records.videos?.slice(0, page),
                    totalRecords: response.records.videos?.length,
                }
            }

            return response
        })

    return data
}

