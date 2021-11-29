import styled from 'styled-components'

interface Props {
    isActive?: boolean
    showItems?: boolean
    isDark?: boolean
}

export const StyledCollectionWrapper = styled.div`
    border-bottom: 1px solid rgba(0,0,0,.125);
    padding: .5rem 1rem;
    margin-bottom: 3.125rem;
    width: 100%;
`
export const StyledIconWrapper = styled.span<Props>`
    cursor: pointer;
    display: flex;
    opacity: ${props => props.isDark
        ? '1'
        : '.55'};
    margin: 0 .3125rem;
`
export const StyledCollectionHeaderContainer = styled.div`
    flex: 1 1 auto;
    padding: 0 1rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
`
export const StyledCollectionContent = styled.div<Props>`
    display: ${props => props.showItems
        ? 'block'
        : 'none'};
    border: 1px solid #212529;
    border-radius: 3px;
    position: absolute;
    right: 17.5rem;
    overflow: auto;
    z-index: 5;
    background-color: #fff;
    padding: .625rem;
`
export const StyledCollectionTitle = styled.div`
    font-size: 15px;
    font-weight: 600;
    text-transform: capitalize;
`
export const StyledCollectionToggleHeader = styled.div`
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
`
export const StyledCollectionDescription = styled.p`
    margin: 0 0 1rem 0;
`
export const StyledCollectionListItem = styled.a<Props>`
    background-color: ${props => props.isActive
    ? '#edeafc'
    : 'transparent'};
    color: ${props => props.isActive
    ? '#20145a'
    : '#212529'};
    display: block;
    text-decoration: none;
    opacity: .55;
`
