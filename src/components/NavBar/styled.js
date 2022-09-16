import {Link} from 'react-router-dom';
import styled from "styled-components";
import { AiOutlineUser } from 'react-icons/ai';
import {MdOutlineShoppingBasket} from 'react-icons/md'

const IconStyled = ` 
    font-size: 35px !important; 
  `;

const imageStyled = `
    display: block;
    width: 45px;
    min-width: 45px;
    height: 45px;
  `;

// Icons
const ShoppingBasketIconStyled = styled(MdOutlineShoppingBasket)`${IconStyled}`;
const PersonOutlineIconStyled = styled(AiOutlineUser)`${IconStyled}`;

// Component
const PictureLink = styled(Link)`${imageStyled}`

const Header = styled.header`
    background-color: ${props => props.primary ? '#fff' : 'var(--color-1)'};
    color: ${props => props.primary ? 'var(--color-1)' : '#fff'};
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
const ButtonIcon = styled.div`
    position: relative;
    margin: 0px 5px;
    cursor: pointer;
    border-radius: 50%;
    transition: all 350ms linear;

    &:hover{
      color: var(--color-2); 
    }

    div{
        position: absolute;
        top: 0;
        right: -10px;
        background-color: #FFDC27;
        width: 20px;
        height: 20px;
        overflow: hidden;
        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        
        span {
            display: block; 
            color: #000;
            font-size: calc(var(--size) - .5em);
            font-weight: bold;
            text-align: center;
        }
    }

    
`;

export {
    ShoppingBasketIconStyled,
    PersonOutlineIconStyled,
    PictureLink,
    Header,
    HeaderSection,
    Image,
    ButtonIcon,
}
