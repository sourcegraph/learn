import styled from 'styled-components'

interface Props {
    isActive: boolean
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
    font-weight: 500;
    line-height: 1.2;
    margin: 0 0 .5rem 0;
`
export const StyledCollectionDescription = styled.p`
    margin: 0 0 1rem 0;
`
export const StyledCollectionList = styled.div`
    border: inherit;
    border-bottom-width: 0;
    border-bottom-right-radius: calc(.25rem - 1px);
    border-bottom-left-radius: calc(.25rem - 1px);
    border-radius: .25rem;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`
export const StyledCollectionListItem = styled.a<Props>`
    background-color: ${props => props.isActive
    ? '#cfe2ff;'
    : '#fff;'}
    border: 1px solid rgba(0,0,0,.125);
    border-width: 0 0 1px;
    color: ${props => props.isActive
    ? '#084298;'
    : '#212529;'}
    display: block;
    padding: .5rem 1rem;
    position: relative;
    text-decoration: none;
`
