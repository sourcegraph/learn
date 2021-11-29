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
    margin: 0 auto;
    display: flex;
    align-items: center;
`
export const StyledCollectionContentWrapper = styled.div`
    position: relative;
`
export const StyledCollectionContent = styled.div<Props>`
    display: ${props => props.showItems
        ? 'block'
        : 'none'};
    border: 1px solid #212529;
    border-radius: 3px;
    position: absolute;
    overflow: auto;
    z-index: 5;
    background-color: #fff;
    padding: .625rem;
    top: 2rem;
    width: 31.25rem;

    @media screen and (max-width: 768px) {
        width: 12.5rem;
        margin-top: .5rem;
    }

    @media screen and (max-width: 576px) {
        margin-top: 1.5rem;
        width: 9.375rem;
    }
`
export const StyledCollectionTitle = styled.div`
    font-size: 15px;
    font-weight: 600;
`
export const StyledCollectionToggleHeader = styled.div`
    font-size: 15px;
    font-weight: 400;
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
    margin: .5rem 0;
`
