import styled from 'styled-components'

interface Props {
    active: boolean
}

export const StyledRecordWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledRecordNav = styled.div`
    display: flex;
    box-shadow: 0 2px 2px rgb(3, 27, 78, 10%);
`
export const StyledRecordNavLink = styled.a<Props>`
    cursor: pointer;
    text-decoration: none;
    font-weight: 700;
    margin: 0 2rem 0 0;
    border-bottom: ${props => props.active
        ? '1px solid #5033e1'
        : ''};
`
