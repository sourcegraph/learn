import {  constants as FS, promises as fs } from 'fs'

export default async function getBaseDirectory(directories: string[], filename: string): Promise<string | null> {
    const getDirectoriesWithFile = directories.map(async directory => {
        const fileExists = await fs.access(`${directory}/${filename}`, FS.F_OK).then(
          () => true,
          () => false
        )
        return fileExists
            ? directory
            : null
    })

    const [ directory ]  = await Promise.all(getDirectoriesWithFile).then(directories => directories.filter(directory => directory !== null))
    return directory
}
