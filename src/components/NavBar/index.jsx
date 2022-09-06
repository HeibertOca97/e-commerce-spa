import React, {useContext} from 'react';
import { useSelector } from 'react-redux';
import logotype from '../../assets/shop_512.png';
import { 
    ShoppingBasketIconStyled,
    PersonOutlineIconStyled,
    PictureLink,
    Header,
    HeaderSection,
    Image,
    ButtonIcon
} from './styled';
import { ContainerStyled } from '../../styledComponent';
import {ShoppingCartBar} from '../../features/components/ShoppingCartBar/index';
import { AppContext } from '../../app/MyProvider';

const URL_PATH = "/e-commerce-spa";

export function NavBar(){
  const cart = useSelector(state => state.cart);
  const [state, setState] = useContext(AppContext);
  
  return(
    <>
      <Header primary={false}> 
        <ContainerStyled flex="header">
          <HeaderSection px="30">
            <PictureLink to={`${URL_PATH}`}>
              <Image 
                src={logotype} 
                alt="ShopOnline" 
              />
            </PictureLink>
          </HeaderSection>
          <HeaderSection direction="right">
            <ButtonIcon onClick={() => setState({ shoppingCart:  !state.shoppingCart})}>
              { cart.quantity > 0 && <div><span>{cart.quantity}</span></div>}
              <ShoppingBasketIconStyled/>
            </ButtonIcon>
            <ButtonIcon>
              <PersonOutlineIconStyled/>
            </ButtonIcon>
            
          </HeaderSection>
        </ContainerStyled>
      </Header>

      <ShoppingCartBar />

    </>
  );
}
