const rand4 = ():string => (((1 + Math.random()) * 0x10000) | 0).toString(16).slice(1);

const createRandomId = (segments = 8): string => new Array(segments).fill(null).map(():string => rand4()).join('-')

export default createRandomId
