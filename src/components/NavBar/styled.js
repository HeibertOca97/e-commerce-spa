import {Link} from 'react-router-dom';
import styled from "styled-components";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MenuIcon from '@material-ui/icons/Menu';


const Buttons = `
    display: block;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 5px 0 5px;
`;

const buttonStyled = ` 
    ${Buttons}
    font-size: 35px !important;
    transition: all 350ms linear;
    &:hover{
      color: #FFF441;
    } 
  `;

const imageStyled = `
    display: block;
    width: 45px;
    min-width: 45px;
    height: 45px;
  `;

// Icons
const ShoppingBasketIconStyled = styled(ShoppingBasketIcon)`${buttonStyled}`;
const PersonOutlineIconStyled = styled(PersonOutlineIcon)`${buttonStyled}`;
const MenuIconStyled = styled(MenuIcon)`${buttonStyled}`;

// Component
const PictureLink = styled(Link)`${imageStyled}`

const Header = styled.header`
    background-color: ${props => props.primary ? '#fff' : '#1B366A'};
    color: ${props => props.primary ? '#1B366A' : '#fff'};
  `;

const HeaderSection = styled.div`
    width: ${props => props.px || '50'}%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.direction || 'left'};
  `;

const Image = styled.img`
    width:100%;
    height: 100%;
    display: block;
  `;

export {
    ShoppingBasketIconStyled,
    PersonOutlineIconStyled,
    MenuIconStyled,
    PictureLink,
    Header,
    HeaderSection,
    Image,
}
