import styled from 'styled-components'

export const StyledRecordWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledRecord = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`
export const StyledRecordTitle = styled.h3`
    font-weight: 600;
`
export const StyledRecordTags = styled.p`
    color: #6c757d;
    font-size: .875em;
    margin: -.25rem 0 .5rem;
    text-transform: capitalize;
`
export const StyledRecordNav = styled.div`
    display: flex;
    box-shadow: 0 2px 2px rgb(3, 27, 78, 10%);
`
export const StyledRecordNavLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-weight: 700;
    margin: 0 2rem 0 0;
    border-bottom: 1px solid #5033e1;
`
export const StyledRecordDates = styled.div`
    font-size: 12px;
    margin-bottom: .5rem;
`

export const StyledRecordAuthor = styled.a`
    font-size: 12px;
    margin-bottom: .5rem;
    text-decoration: none;
    cursor: pointer;
    color: #212529;

    :hover {
        color: #5033e1;
    }
`
