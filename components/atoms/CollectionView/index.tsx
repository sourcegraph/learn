import Card from '@components/atoms/Card'
import MarkdownFile from '@interfaces/MarkdownFile'
import Link from 'next/link'
import { FunctionComponent } from 'react'

import {
    StyledCollectionHeader,
    StyledCollectionBody,
    StyledCollectionTitle,
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
        </StyledCollectionBody>
        <StyledCollectionList>
            {props.members.map((record, index) => {
                const isActive = props.activeSlug === record.slug
                const titleText = `${index + 1}. ${record.frontMatter.title}`
                return (
                    <Link href={`/${record.frontMatter.type}/${record.slug}`} key={record.slug} passHref={true}>
                        <StyledCollectionListItem isActive={isActive}>{titleText}</StyledCollectionListItem>
                    </Link>
                )
            })}
        </StyledCollectionList>
    </Card>
)

export default CollectionView
