import {useState} from 'react';
//import {Link} from 'react-router-dom';
import {ShoppingCartBar} from '../../features/components/ShoppingCartBar/index';
//import styled from "styled-components";
//import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
//import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
//import MenuIcon from '@material-ui/icons/Menu';
import logotype from '../../assets/shop_512.png';
//import FavoriteIcon from '@material-ui/icons/Favorite';
import { 
    ShoppingBasketIconStyled,
    PersonOutlineIconStyled,
    MenuIconStyled,
    PictureLink,
    Header,
    HeaderSection,
    Image
} from './styled';
import { ContainerStyled } from '../../styledComponent';

//const Header = styled.header`
    //background-color: ${props => props.primary ? '#fff' : '#1B366A'};
    //color: ${props => props.primary ? '#1B366A' : '#fff'};
  //`;

//const HeaderContainer = styled.div`
    //padding: 10px 5px;
    //max-width: 1400px;
    //margin: auto;

    //display: flex;
    //flex-wrap: wrap;
    //align-item: center;
    //justify-content: space-around;
  //`;

//const HeaderSection = styled.div`
    //width: ${props => props.px || '50'}%;
    //display: flex;
    //align-items: center;
    //justify-content: ${props => props.direction || 'left'};
  //`;

//const ImgLogo = styled.img`
    //width:100%;
    //height: 100%;
    //display: block;
  //`;

//const Buttons = {
  //display: 'block',
  //cursor: 'pointer',
  //borderRadius: '10px',
  //marginLeft: '5px',
  //marginRight: '5px'
//};

//const ButtonEffect = ` 
    //font-size: 35px !important;
    //transition: all 350ms linear;
    //&:hover{
      //color: #FFF441;
    //} 
  //`;

//const LinkImg = `
    //display: block;
    //width: 45px;
    //min-width: 45px;
    //height: 45px;
  //`;

//const ShoppingBasketButton = styled(ShoppingBasketIcon)`${ButtonEffect}`;
//const PersonOutlineButton = styled(PersonOutlineIcon)`${ButtonEffect}`;
//const MenuButton = styled(MenuIcon)`${ButtonEffect}`;
//const LinkPicture = styled(Link)`${LinkImg}`

export function NavBar(){

  const [shoppingCartBarStatus, setShoppingCartBarStatus] = useState(false);

  const handleShoppingCartBarStatus = () => {
    setShoppingCartBarStatus(prevShoppingCartBarStatus => !prevShoppingCartBarStatus);
  };

  return(
    <>
      <Header primary={false}> 
        <ContainerStyled flex="header">
          <HeaderSection px="30">
            <PictureLink to="/">
              <Image 
                src={logotype} 
                alt="ShopOnline" 
              />
            </PictureLink>
          </HeaderSection>
          <HeaderSection direction="right">
            <ShoppingBasketIconStyled
              onClick={handleShoppingCartBarStatus} 
            />
            <PersonOutlineIconStyled/>
            <MenuIconStyled />
          </HeaderSection>
        </ContainerStyled>
      </Header>

      <ShoppingCartBar handleShoppingCartBarStatus={handleShoppingCartBarStatus} shoppingCartBarStatus={shoppingCartBarStatus}/>

    </>
  );
}
