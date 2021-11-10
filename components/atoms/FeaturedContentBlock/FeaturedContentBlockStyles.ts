import styled from 'styled-components'

export const StyledFeaturedContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    min-height: 250px;
    margin-bottom: 2rem;
`

export const StyledFeaturedContentList = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0;

    li {
        list-style: none;
    }

    a {
        margin: 0;
    }
`
export const StyledFeaturedContentItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
`
export const StyledHeaderText = styled.h5`
    font-size: 36px;
    margin-bottom: 1rem;
    justify-content: center;
    display: flex;
`
