import styled from 'styled-components'

export const StyledRecordTabWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledRecord = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`
export const StyledRecordTitle = styled.a`
    font-weight: 600;
    text-decoration: none;
    color: #212529;

    :hover {
        color: #5033e1;
    }
`
export const StyledRecordTags = styled.p`
    color: #6c757d;
    font-size: .875em;
    margin: -.25rem 0 .5rem;
    text-transform: capitalize;
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
