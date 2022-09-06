import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ContainerStyled, CardItem } from '../styledComponent';

const Container = styled(ContainerStyled)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const TitlePage = styled.h3`
  text-align: center;
  margin: 10px 0 25px 0;
  font-size: calc(var(--size) + 1em);
  text-transform: uppercase;
`;

function CheckCart(){
    const cart = useSelector(state => state.cart); 
    
    const ShowProductAdded = () => {
        if(cart.carts.length < 1){
            return (<div>
                Your cart is empty 
                <button>keep shopping</button>
        </div>);
        }

      return (<Container>
        <TitlePage>Your shopping cart</TitlePage>
        <section>
          <div>
            {cart.carts.map((product, index) => (
              <CardItem key={index}>
                <picture><img 
                  src={product.image}
                  alt={product.title} 
                /></picture>
                <div>
                  <div>
                    <h4>{ product.title }</h4>
                    <p><span>${ product.price } x {product.quantity} = ${(product.price * product.quantity).toFixed(2)}</span></p>
                  </div>
                </div>
              </CardItem>
            ))}
          </div>
          <div> 
            <table>
              <thead>
                <tr>
                  <th>total of your cart</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Shipment</td>
                  <td></td>
                </tr>
                <tr>
                  <td>IVA</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td></td>
                </tr>
              </tbody> 
            </table>
          </div>
        </section>
      </Container>);
    }

  return <ShowProductAdded />;
}

export default CheckCart;
