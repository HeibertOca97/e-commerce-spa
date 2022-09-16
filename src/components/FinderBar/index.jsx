import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getByName, getByCategory } from '../../features/products/productSlice'
import { Container, Input, Select, SearchStyleIcon, AlertMessage } from './styled'

export function FinderBar(props) {
  const [inputCategory, setInputCategory] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const dispatch = useDispatch();

  const showMessage = () => {
    if(inputSearch.length > 1){
      setAlertMessage(`Find some result for "${inputSearch}"... by "${!inputCategory ? "All" : inputCategory}"`);
    } 
  }

  const handleSearchByName = () => {
    if(!inputSearch || inputSearch.length < 1) return;
    showMessage();
    dispatch(getByName({ name: inputSearch, category: inputCategory }));
  }

  const handleResetSearch = () => {
    setInputSearch('');
    handleSetByCategory(inputCategory);
  }
  
  const handleSetByCategory = (category) => {
    setInputCategory(category);
    setAlertMessage('');
    dispatch(getByCategory({ category })); 
  }

  useEffect(() => {
    setInputCategory("all");
  }, [])

  return (
    <>
      <Container margin={props.margin}>
        <div>
          <Select 
            name="category" 
            onChange={(ev) => handleSetByCategory(ev.target.value)}
            autoFocus={true}
          >
            <option value="all">All</option>
            <option value="unisex">Unisex</option>
            <option value="ladies">Ladies</option>
            <option value="gentlemen">Gentlemen</option>
          </Select>
        </div>
        <div>
          <SearchStyleIcon cursor="pointer" onClick={handleSearchByName}/>
          <Input 
            type="text" 
            name="searchProduct"
            value={inputSearch} 
            onChange={(ev) => setInputSearch(ev.target.value)}
            onKeyDown={(ev)=> ev.keyCode === 13 && handleSearchByName()}
            placeholder="Search for your product here.."
            autoComplete="off"
          />
        </div>
      </Container>
      { alertMessage ? <AlertMessage>{alertMessage} <button className="button-reset" onClick={handleResetSearch}>RESET SEARCH</button></AlertMessage> : "" }
    </>
  );
}
