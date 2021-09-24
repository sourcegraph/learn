import { Router } from 'express'

export interface ResultsArray {
    [index: number]: ResultsObject
}

export interface Commit {
    author: Author
    repository: Repository
    subject: string
}

export interface Repository {
    name: string
}

export interface Author {
    person: Person
}

export interface Person {
    displayName: string
}

export type ResultsObject = RepositoryResultsObject & FileResultsObject & CommitResultsObject

export interface CommitResultsObject {
    commit: Commit
}

export interface RepositoryResultsObject {
    __typename: string
    name: string
    url: string
}

export interface FileResultsObject {
    __typename: string
    repository: RepositoryMatch
    file: FileMatch
    lineMatches: LineMatch[]
}

export interface RepositoryMatch {
    name: string
    url: string
}

export interface FileMatch {
    name: string
    path: string
    url: string
    content: string
    commit: Node
}

export interface LineMatch {
    preview: string
    lineNumber: number
    offsetAndLengths: number[][]
    limitHit: boolean
}

export interface RoutesObject {
    default: (argument0: Router) => void
}