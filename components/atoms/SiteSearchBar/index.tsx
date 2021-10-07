import SearchIcon from 'mdi-react/SearchIcon'
import { FunctionComponent } from 'react'

import { StyledSearchForm, StyledKeyboardInput } from './SiteSearchBarStyles'

const SiteSearch: FunctionComponent = () => (
    <StyledSearchForm>
        <SearchIcon size='1.1em' />
        <input
            type='search'
            placeholder='Search Sourcegraph Learn'
            autoComplete='off'
            autoCorrect='off'
            autoCapitalize='off'
            className='search-input st-default-search-input' />
            <StyledKeyboardInput>&#8984;K</StyledKeyboardInput>
    </StyledSearchForm>
)

export default SiteSearch
