import styled from "styled-components";
import { MdOutlineSearch } from 'react-icons/md'

const iconStyle = `
  display: inline-block;
  color: #101214; 
  height: 25px;
  width: 35px;
  marginLeft: 5px;
`;
  
const containerStyle = `
  width: 95%;
  margin: 10px auto;
  border-radius: 20px;
  border: 1px solid #ccc;
  display: grid;
  grid-template-columns: 150px minmax(150px, 1fr);
  column-gap: 5px;
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

const Container = styled.div`${containerStyle}`;
const Input = styled.input`${inputStyle}`;
const Select = styled.select`${inputStyle}`;
const SearchStyleIcon = styled(MdOutlineSearch)`${iconStyle}`;


export {
  Container,
  Input,
  Select,
  SearchStyleIcon,
}
