export const returnPreviousLine = (content: string, matchLineNumber: number): string => content.split(/\n/).slice(matchLineNumber-1, matchLineNumber).join()

export const returnNextLine = (content: string, matchLineNumber: number): string => content.split(/\n/).slice(matchLineNumber+1, matchLineNumber+2).join()
