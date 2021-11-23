import styled from 'styled-components'

interface Props {
    isActive?: boolean
}

export const StyledCollectionHeader = styled.div`
    background-color: rgba(0,0,0,.03);
    border-bottom: 1px solid rgba(0,0,0,.125);
    padding: .5rem 1rem;
    margin-bottom: 0;
`
export const StyledCollectionBody = styled.div`
    flex: 1 1 auto;
    padding: 1rem;
`
export const StyledCollectionTitle = styled.h5`
    font-size: 1.25rem;
    margin: 0 0 .5rem 0;
`
export const StyledCollectionDescription = styled.p`
    margin: 0 0 1rem 0;
`
export const StyledCollectionList = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`
export const StyledCollectionListItem = styled.a<Props>`
    background-color: ${props => props.isActive
    ? '#edeafc'
    : 'transparent'};
    border: 1px solid rgba(0,0,0,.125);
    border-width: 0 0 1px;
    color: ${props => props.isActive
    ? '#20145a'
    : 'var(--text-color)'};
    display: block;
    padding: .5rem 1rem;
    position: relative;
    text-decoration: none;
`
