import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalStyled } from '../../../styledComponent';
import { ContainerBar, CardHeader, CardBody, CardItem, CardAction, CloseIconStyled, DeleteIconStyled } from './styled'

export function ShoppingCartBar({ handleShoppingCartBarStatus, shoppingCartBarStatus }){ 
  const cart = useSelector(state => state.cart);
  const [headerHeight, setHeaderHeight] = useState(0);

  const setHeightForHeaderCart = () => {
    const height = document.querySelector("body header").clientHeight;
    setHeaderHeight(height);
  }

  useEffect(() =>{ 
    setHeightForHeaderCart();
    console.log('useEffect 1')
  }, [])

  useEffect(() => {
    let value = shoppingCartBarStatus ? 'hidden' : 'auto';
    document.body.style.overflow = value;
    console.log('useEffect 2')
  }, [shoppingCartBarStatus])



  return (
    <>
      <ModalStyled zindex={shoppingCartBarStatus && 50} status={shoppingCartBarStatus}/>
      <ContainerBar zindex={60} status={shoppingCartBarStatus}> 
        <CardHeader height={headerHeight}>
          <p>Item in your cart <span>({cart.quantity})</span></p> <CloseIconStyled cursor="pointer" onClick={handleShoppingCartBarStatus}/> 
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
                  <DeleteIconStyled cursor="pointer" />
                </div>
              </CardItem>
            ))
          }
        </CardBody>

        <CardAction>
          <button>Go checking</button>
          <p>Total ${cart.total}</p>
        </CardAction> 
      </ContainerBar>
    </>

  );
}
