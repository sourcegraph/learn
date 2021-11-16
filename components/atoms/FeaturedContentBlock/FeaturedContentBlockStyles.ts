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

        @media screen and (max-width: 768px) {
            width: 100%;
            margin: 0 1.25rem;
        }
    }

    a {
        margin: 0;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const StyledFeaturedContentItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 65%;

    @media screen and (max-width: 768px) {
        max-width: unset;
        width: 100%;
        margin: 0 1.25rem;
    }
`
export const StyledHeaderText = styled.h5`
    font-size: 36px;
    margin-bottom: 1rem;
    justify-content: center;
    display: flex;
`
