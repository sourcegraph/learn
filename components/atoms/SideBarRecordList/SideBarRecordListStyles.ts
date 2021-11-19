import styled from 'styled-components'

export const StyledSideBarRecordWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 1.25rem;

    @media screen and (max-width: 768px) {
        margin: unset;
    }
`
export const StyledSideBarRecord = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5rem 0;
`
