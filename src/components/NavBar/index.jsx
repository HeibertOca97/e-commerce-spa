import {useState} from 'react';
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

export function NavBar(){
  const cart = useSelector(state => state.cart);
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
            <ButtonIcon>
              { cart.quantity > 0 && <span>{cart.quantity}</span>}
              <ShoppingBasketIconStyled
                onClick={handleShoppingCartBarStatus} 
              />
            </ButtonIcon>
            <ButtonIcon>
              <PersonOutlineIconStyled/>
            </ButtonIcon>
            
          </HeaderSection>
        </ContainerStyled>
      </Header>

      <ShoppingCartBar handleShoppingCartBarStatus={handleShoppingCartBarStatus} shoppingCartBarStatus={shoppingCartBarStatus}/>

    </>
  );
}
