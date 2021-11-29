import MarkdownFile from '@interfaces/MarkdownFile'
import ChevronDownBoxOutlineIcon from 'mdi-react/ChevronDownBoxOutlineIcon'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'
import { FunctionComponent, useState } from 'react'

import {
    StyledCollectionWrapper,
    StyledCollectionHeaderContainer,
    StyledCollectionTitle,
    StyledCollectionListItem,
    StyledCollectionToggleHeader,
    StyledIconWrapper,
    StyledCollectionContent,
    StyledCollectionContentWrapper,
} from './CollectionViewStyles'

interface Props {
    title: string
    description?: string
    members: MarkdownFile[]
    activeSlug?: string
    isDark: boolean
}

const CollectionView: FunctionComponent<Props> = props => {
    const [showItems, setShowItems] = useState<boolean>(false)

    return (
        <StyledCollectionWrapper>
            <StyledCollectionHeaderContainer>
                <StyledCollectionTitle>{props.title}</StyledCollectionTitle>
                <ChevronRightIcon />
                <StyledCollectionToggleHeader>
                {[props.members.slice(0, 1)][0][0].frontMatter.title}
                </StyledCollectionToggleHeader>
                <StyledIconWrapper onClick={() => setShowItems(!showItems)} isDark={props.isDark}>
                    <ChevronDownBoxOutlineIcon />
                </StyledIconWrapper>
            </StyledCollectionHeaderContainer>
            <StyledCollectionContentWrapper>
                <StyledCollectionContent showItems={showItems}>
                    {props.members.map(record => {
                        const isActive = props.activeSlug === record.slug
                        const titleText = `${record.frontMatter.title}`
                        return (
                            <Link href={`/${record.slug}`} key={record.slug} passHref={true}>
                                <StyledCollectionListItem isActive={isActive}>{titleText}</StyledCollectionListItem>
                            </Link>
                        )
                    })}
                </StyledCollectionContent>
            </StyledCollectionContentWrapper>
        </StyledCollectionWrapper>
    )
}

export default CollectionView
