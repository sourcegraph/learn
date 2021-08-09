import Link from 'next/link'
import React from 'react'

import MarkdownFile from '../../../interfaces/MarkdownFile'
import Card from '../Card'

import {
    StyledCollectionHeader,
    StyledCollectionBody,
    StyledCollectionTitle,
    StyledCollectionDescription,
    StyledCollectionList,
    StyledCollectionListItem,
} from './CollectionViewStyles'

interface Props {
    title: string
    description?: string
    members: MarkdownFile[]
    activeSlug?: string
}

const CollectionView: React.FunctionComponent<Props> = props => (
    <Card addMargin={true} showBorder={true} leftAlign={true}>
        <StyledCollectionHeader>This article is part of a series:</StyledCollectionHeader>
        <StyledCollectionBody>
            <StyledCollectionTitle>{props.title}</StyledCollectionTitle>
            {props.description && <StyledCollectionDescription>props.description</StyledCollectionDescription>}
        </StyledCollectionBody>
        <StyledCollectionList>
            {props.members.map((post, index) => {
                const isActive = props.activeSlug === post.slug
                const titleText = `${index + 1}. ${post.frontMatter.title}`
                return (
                    <Link href={`/${post.slug}`} key={post.slug} passHref={true}>
                        <StyledCollectionListItem isActive={isActive}>{titleText}</StyledCollectionListItem>
                    </Link>
                )
            })}
        </StyledCollectionList>
    </Card>
)

export default CollectionView
