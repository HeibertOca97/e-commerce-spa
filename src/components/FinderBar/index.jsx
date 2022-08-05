import {useState} from 'react';
import { Container, Input, Select, SearchStyleIcon } from './styled'
import { useDispatch } from 'react-redux';
import { filterProduct } from '../../features/products/productSlice'

export function FinderBar() {
  const [selectOption, setSelectOption] = useState('');
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const validateSearchResults = (category, value) => {
    if(value.length > 1) console.log(`Find some result for "${value}"... by "${category}"`);
  }

  const handleClickAndSendSearchResult = () => {
    dispatch(filterProduct({
      category: selectOption,
      title: search
    }));
    validateSearchResults(selectOption, search);
  } 

  const getSearchResults = () => {
    dispatch(filterProduct({
      category: selectOption,
      title: search
    }));
    validateSearchResults(selectOption, search);
  }

  return (
    <Container>
      <div>
        <Select 
          name="category" 
          onChange={(ev) => dispatch(filterProduct({category: ev.target.value}))}
          onFocus={(ev) => setSelectOption(ev.target.value)}
          autoFocus={true}
        >
          <option value="">Select a category...</option>
          <option value="unisex">Unisex</option>
          <option value="ladies">Ladies</option>
          <option value="gentlemen">Gentlemen</option>
        </Select>
      </div>
      <div>
        <SearchStyleIcon cursor="pointer" onClick={handleClickAndSendSearchResult}/>
        <Input 
          type="text" 
          name="searchProduct"
          value={search} 
          onChange={(ev) => setSearch(ev.target.value)}
          onKeyUp={getSearchResults}
          placeholder="Search for your product here.."
          autoComplete="off"
        />
      </div>
    </Container>
  );
}
