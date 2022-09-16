import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ContainerStyled, CardItem, ButtonStyled } from '../styledComponent';
import { CounterManagement } from '../components/CounterManagement';
import { DeleteIconStyled } from '../features/components/ShoppingCartBar/styled.js';
import { removeProductFromCart } from '../features/carts/cartSlice.js';
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useRedirect } from '../assets/helpers/redirect.hook';
import { BoxLoading } from '../components/BoxLoading';

const Container = styled(ContainerStyled)`
  ${(props) => {
    if(props.margin){
      return `
        margin-top: 50px;
        margin-bottom: 50px;
      `;
    }
  }}

  .text__bold{
    font-weight: bold; 
  }

  .card__info-empty{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
      font-size: calc(var(--size) + .8em);
    }
    .btn{
      border: none;
      padding: 10px 15px;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
    }

    .btn-keep{
      border: 2px solid var(--color-1);
      background-color: #fff;
      color: var(--color-1);
      transition: all 250ms linear;

      &:hover{
        background-color: var(--color-1);
        color: #fff;
      }
    }
  }

  @media screen and (min-width: 768px){
    &>section{
      display: flex;
    }
  }
`;
const CartIconStyled = styled(MdOutlineShoppingCart)`
  font-size: calc(var(--size) + 3em);
  margin: 20px 0;
`;

const TitlePage = styled.h3`
  text-align: center;
  margin: 10px 0 50px 0;
  font-size: calc(var(--size) + 1em);
  text-transform: uppercase;
`;

const TableStyled = styled.table`
  display: block;
  width: 100%;
  border-collapse: collapse;

  thead{
    display: block;
    
    tr, tr > th{
      display: block;
    }

    tr > th{
      padding: 15px;
      text-transform: uppercase;
      font-size: calc(var(--size) + .2em);
    }
  }

  tbody{
    display: block;
    tr{
      display: flex;
      border-bottom: 1px solid #BEBEBE;
      
      &:last-child{
        border-bottom: none;
      }

      & > td{
        display: block;
        width: 50%;
        padding: 15px 0;

        &:first-child{
          color: var(--color-4);
        }
        
        &:last-child{
          color: var(--color-3);
        }  
      }
    }
  }
`;

const BoxItem = styled.div`
  position: relative;
  @media screen and (min-width: 768px){
    width: 65%;
  } 
`;

const BoxInfo = styled.aside`
  display: display;
  font-size: calc(var(--size) - .3em);
  position: relative;

  &>div{
    box-shadow: 0px 5px 10px #ddd;
    padding: 10px 10px 15px 10px;
    width: 90%;
    border-radius: 5px;
    margin: 0 auto;

    .sending__progress-bar{
      display: block;
      font-weight: bold;
      text-align: center;
      line-height: 2em;
      background-color: #3DC331;
      color: #fff;
      border-radius: 5px;
      margin: 15px 0;
    }

    .card__note{
      margin: 15px 0;
      strong{
        text-transform: uppercase;
      }
    }
    
  }

  @media screen and (min-width: 768px){
    &>div{
      position: sticky;
      top: 8px;
    }
    width: 35%;
  }
`;


export default function ViewCart(){
  const cart = useSelector(state => state.cart); 
  const dispatch = useDispatch();
  const {redirectTo} = useRedirect(); 
  const [load, setLoad] = useState(false);
  const location = useLocation();

  const removeProduct = (id) => {
    setLoad(true);

    setTimeout(() => {
      setLoad(false);
      dispatch(removeProductFromCart({ id }));
    }, 2000);
  }

  const handleUpdateQuantityOfProduct = (fn) => {
    setLoad(true);

    setTimeout(() => {
      setLoad(false);
      fn();
    }, 2000);
  };
  
  const ShowProductAdded = () => {
    let pathname = location.pathname.split('/').pop();
    let titleDescription = pathname === 'order-status' ? "Your order has been processed!" : "Your cart is empty";

    if(cart.carts.length < 1){
      return (<Container>
        <div className="card__info-empty">
          <h3>{ titleDescription }</h3>
          <CartIconStyled />
          <button 
            onClick={() => redirectTo()}
          className="btn btn-keep">keep shopping</button>
        </div>
      </Container>);
    }

    return (<Container margin>
      <TitlePage>Your shopping cart</TitlePage>
      <section>
        <BoxItem>
          { load && <BoxLoading /> }
          {cart.carts.map((product, index) => (
            <CardItem key={index}>
              <picture className="card__picture"><img 
                src={product.image}
                alt={product.title} 
              /></picture>
              <div className="card__body">
                <h4>{ product.title }</h4>
                  <CounterManagement 
                    id={product.id} 
                    price={product.price} 
                    quantity={product.quantity} 
                    handleUpdateQuantityOfProduct={handleUpdateQuantityOfProduct}
                  />
                <DeleteIconStyled cursor="pointer" onClick={ () => removeProduct(product.id) } />
              </div>
            </CardItem>
          ))}
        </BoxItem>
        <BoxInfo> 
          <div>
          { load && <BoxLoading /> }
            <TableStyled>
              <thead>
                <tr>
                  <th colSpan="2">Total of your cart</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text__bold">Subtotal</td>
                  <td>${ cart.subtotal.toFixed(2) }</td>
                </tr>
                <tr>
                  <td className="text__bold">Shipping</td>
                  <td>Free shipping for the whole country</td>
                </tr>
                <tr>
                  <td className="text__bold">IVA</td>
                  <td>${ cart.iva }</td>
                </tr>
                <tr>
                  <td className="text__bold">Total</td>
                  <td>${ cart.total }</td>
                </tr>
              </tbody> 
            </TableStyled>
            <span className="sending__progress-bar">100%</span>
            <p className="card__note"><strong>Your shipping is free!</strong> don't worry we'll take care of it</p>
            <ButtonStyled 
            hover 
            radius="5px"
            onClick={() => redirectTo('checkout-order')}
            >Checkout</ButtonStyled>
          </div>
        </BoxInfo>
      </section>
    </Container>);
  }

  return <ShowProductAdded />;
}
