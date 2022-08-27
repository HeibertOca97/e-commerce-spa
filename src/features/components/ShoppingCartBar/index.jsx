import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../carts/cartSlice';
import { ModalStyled } from '../../../styledComponent';
import { ContainerBar, CardHeader, CardBody, CardItem, CardAction, CloseIconStyled, DeleteIconStyled, ButtonGoCart } from './styled';
import { AppContext } from '../../../app/modalState';

const URL_PATH = "/e-commerce-spa";

export function ShoppingCartBar(){ 
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useContext(AppContext);

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() =>{ 
    const setHeightForHeaderCart = () => {
      const height = document.querySelector("body header").clientHeight;
      setHeaderHeight(height);
    }
    setHeightForHeaderCart();
  }, []);

  useEffect(() => {
    let value = state.shoppingCart ? 'hidden' : 'auto';
    document.body.style.overflow = value;
  }, [state.shoppingCart]);


  const removeProduct = (id) => {
    dispatch(removeProductFromCart({ id }));
  }

  const redirect = () => {
    setState({shoppingCart: !state.shoppingCart});
    navigate(`${URL_PATH}/check-cart`);
  }

  return (
    <>
      <ModalStyled zindex={state.shoppingCart && 50} status={state.shoppingCart}/>
      <ContainerBar zindex={60} status={state.shoppingCart}> 
        <CardHeader height={headerHeight}>
          <p>Item in your cart <span>({cart.quantity})</span></p> <CloseIconStyled cursor="pointer" onClick={() => setState({ shoppingCart: !state.shoppingCart })}/> 
        </CardHeader>
        <CardBody>
          {
            cart.carts.map((product, index) => (
              <CardItem key={index}>
                <picture><img 
                  src={product.image}
                  alt={product.title} 
                /></picture>
                <div>
                  <div>
                    <h4>{ product.title }</h4>
                    <p><strong>${ product.price } x {product.quantity} = ${product.price * product.quantity}</strong></p>
                  </div>
                  <DeleteIconStyled cursor="pointer" onClick={ () => removeProduct(product.id) } />
                </div>
              </CardItem>
            ))
          }
        </CardBody>

        <CardAction>
          <ButtonGoCart onClick={redirect}>Go checking</ButtonGoCart>
          <p>Total ${cart.total.toFixed(2)}</p>
        </CardAction> 
      </ContainerBar>
    </>

  );
}
