import {useState} from 'react';
import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const containerStyle = `
  width: 95%;
  margin: 10px auto;
  border-radius: 20px;
  border: 1px solid #ccc;
  display: grid;
  grid-template-columns: 150px 1fr;
  &>div{
    display: flex;
    align-items: center;
  }
`;

const inputStyle = `
  padding: 15px 10px;
  border: none;
  display: block;
  width: 100%;
  outline: none;
  background-color: #fff;
  border-radius: 20px;
`;

const iconStyle = {
  display: "inline-block",
  color: "#101214", 
  height: "25px",
  width: "35px",
  marginLeft: "5px",
  };

const Container = styled.div`${containerStyle}`;
const Input = styled.input`${inputStyle}`;
const Select = styled.select`${inputStyle}`;


export function FinderBar() {
  const [selectOption, setSelectOption] = useState('');
  const [search, setSearch] = useState('');

  const validateSearchResults = (category, value) => {
    if(value.length > 1) console.log(`Find some result for "${value}"... by "${category}"`);
    console.log("complete");
  }

  const handleClickAndSendSearchResult = () => {
    validateSearchResults(selectOption, search);
  } 

  const getSearchResults = () => {
    validateSearchResults(selectOption, search);
  }

  return (
    <Container>
      { console.log(selectOption) }
      <div>
        <FormatListBulletedIcon style={iconStyle} />
        <Select 
          name="category" 
          onChange={(ev) => setSelectOption(ev.target.value)}
          onFocus={(ev) => setSelectOption(ev.target.value)}
          autoFocus={true}
        >
          <option value="">Select a category...</option>
          <option value="all">All</option>
        </Select>
      </div>
      <div>
        <SearchIcon cursor="pointer" style={iconStyle} onClick={handleClickAndSendSearchResult}/>
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
