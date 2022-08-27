import styled from "styled-components";
import { MdOutlineSearch } from 'react-icons/md'

const iconStyle = `
  display: inline-block;
  color: #101214; 
  height: 25px;
  width: 35px;
  marginLeft: 5px;
`;
  
const Container = styled.div`
  width: 95%;
  margin: ${(props) => props.margin ? props.margin : '15px auto'};
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

const Input = styled.input`${inputStyle}`;
const Select = styled.select`${inputStyle}`;
const SearchStyleIcon = styled(MdOutlineSearch)`${iconStyle}`;
const AlertMessage = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1em;
  line-height: 2.2em;
  color: #1B366A;

  .button-reset{
    display: inline-block;
    border: 2px solid transparent;
    color: #fff;
    background-color: #1B366A;
    padding: 5px 10px;
    font-weight: 700;
    cursor: pointer;
    margin: 0 10px;
    transition: all 250ms linear;

    &:hover{
      background-color: #fff;
      border: 2px solid #1B366A;
      color: #1B366A;
    } 
  }
`;


export {
  Container,
  Input,
  Select,
  SearchStyleIcon,
  AlertMessage,
}
