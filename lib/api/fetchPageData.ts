import { promises as fs } from 'fs'

import { PageData } from '@interfaces/PageData'
import loadMarkdownFile from '@lib/loadMarkdownFile'
import markdownWithUrls from '@util/markdownWithUrls'

const fetchPageData = async (): Promise<PageData> => {
    const fileRegex = /\.(md|markdown|mdx)$/gi
    const getPostUrls = await fs.readdir('posts')
    const getVideoUrls = await fs.readdir('videos')
    const matchedPosts = getPostUrls.filter(file => file.match(fileRegex))
    const matchedVideos = getVideoUrls.filter(file => file.match(fileRegex))
    const getPosts = matchedPosts.map(async file => loadMarkdownFile('posts', file))
    const getVideos = matchedVideos.map(async file => loadMarkdownFile('videos', file))
    const posts = Promise.all(getPosts)
        .then(response => markdownWithUrls(response))
        .catch(error => {
            throw new Error(`error: ${String(error)}`)
        })
    const videos = Promise.all(getVideos)
        .then(response => markdownWithUrls(response))
        .catch(error => {
            throw new Error(`error: ${String(error)}`)
        })

    const filesObject = {
        records: {
            posts: await posts,
            videos: await videos,
        }
    }
    
    return filesObject
}

export default fetchPageData
