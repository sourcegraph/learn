import Card from '@components/atoms/Card'
import MarkdownFile from '@interfaces/MarkdownFile'
import Link from 'next/link'
import { FunctionComponent } from 'react'

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

const CollectionView: FunctionComponent<Props> = props => (
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
