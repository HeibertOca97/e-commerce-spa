import {useState } from 'react';
import { Container, Input, Select, SearchStyleIcon } from './styled'
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct } from '../../features/products/productSlice'

export function FinderBar() {
  const [selectOption, setSelectOption] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.products);

  const validateSearchResults = (category, value) => {
    if(value.length > 1){
      setMessage(`Find some result for "${value}"... by "${!category ? "All" : category}"`);

    } 
  }

  const handleSearchProduct = () => {
    validateSearchResults(selectOption, inputSearch);
    dispatch(filterProduct({
      category: selectOption,
      name: inputSearch
    }));
  }

  return (
    <>
    <Container>
      <div>
        <Select 
          name="category" 
          onFocus={(ev) => setSelectOption(ev.target.value)}
          onChange={(ev) => setSelectOption(ev.target.value)}
          autoFocus={true}
        >
          <option value="">All</option>
          <option value="unisex">Unisex</option>
          <option value="ladies">Ladies</option>
          <option value="gentlemen">Gentlemen</option>
        </Select>
      </div>
      <div>
        <SearchStyleIcon cursor="pointer" onClick={handleSearchProduct}/>
        <Input 
          type="text" 
          name="searchProduct"
          value={inputSearch} 
          onChange={(ev) => setInputSearch(ev.target.value)}
          placeholder="Search for your product here.."
          autoComplete="off"
        />
      </div>
    </Container>
      { message && filters.length > 0 ? <p>{message} | <strong>{filters.length}</strong></p> : "" }
    </>
  );
}
