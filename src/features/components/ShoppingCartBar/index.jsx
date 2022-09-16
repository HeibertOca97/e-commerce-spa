import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../carts/cartSlice';
import { ModalStyled, CardItem } from '../../../styledComponent';
import { ContainerBar, CardHeader, CardBody, CardAction, CloseIconStyled, DeleteIconStyled, ButtonGoCart } from './styled';
import { AppContext } from '../../../app/MyProvider';
import { useRedirect } from '../../../assets/helpers/redirect.hook.js';
import { BoxLoading } from '../../../components/BoxLoading';

export function ShoppingCartBar(){ 
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const { redirectTo } = useRedirect();
  const [state, setState] = useContext(AppContext);
  const [load, setLoad] = useState(false);
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
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      dispatch(removeProductFromCart({ id }));
    }, 2000);
  }

  return (
    <>
      <ModalStyled zindex={state.shoppingCart && 50} status={state.shoppingCart}/>
      <ContainerBar zindex={60} status={state.shoppingCart}> 
        <CardHeader height={headerHeight}>
          <p>Item in your cart <span>({cart.quantity})</span></p> <CloseIconStyled cursor="pointer" onClick={() => setState({ shoppingCart: !state.shoppingCart })}/> 
        </CardHeader>
        <CardBody>
          { load && <BoxLoading /> }
          {
            cart.carts.map((product, index) => (
              <CardItem key={index}>
                <picture className="card__picture"><img 
                  src={product.image}
                  alt={product.title} 
                /></picture>
                <div className="card__body">
                    <h4>{ product.title }</h4>
                  <div>
                    <p><span>${ product.price } x {product.quantity} = ${(product.price * product.quantity).toFixed(2)}</span></p>
                  </div>
                  <DeleteIconStyled 
                    cursor="pointer" 
                    onClick={ () => removeProduct(product.id) } 
                  />
                </div>
              </CardItem>
            ))
          }
        </CardBody>

        <CardAction>
          <ButtonGoCart onClick={() => {
            setState({shoppingCart: !state.shoppingCart});
            redirectTo('view-cart');
          }}>view cart</ButtonGoCart>
          <p>SubTotal ${cart.subtotal.toFixed(2)}</p>
        </CardAction> 
      </ContainerBar>
    </>

  );
}
