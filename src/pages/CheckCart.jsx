import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ContainerStyled, ButtonStyled } from '../styledComponent';
import { useRedirect } from '../assets/helpers/redirect.hook';

const Container = styled(ContainerStyled)`
  margin-top: 50px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px){
    &>section{
      display: flex;
    }
  }
`;

const TitlePage = styled.h3`
  text-align: center;
  margin: 10px 0 25px 0;
  font-size: calc(var(--size) + 1em);
  text-transform: uppercase;
`;

const TableStyled = styled.table`
  display: block;
  width: 100%;
  border-collapse: collapse;

  tbody>tr{
    display: flex;
  }

  thead,thead>tr, thead>tr th, 
  tbody, tbody>tr td{
    display: block;
  }

  thead tr > th{
    padding: 15px;
    text-transform: uppercase;
    font-size: calc(var(--size) + .2em);
  }
  tbody tr > td{
    width: 50%;
    padding: 15px 0;
  }
  tbody tr > td:first-child{
    font-weight: bold;
    color: #454545;
  }
  tbody tr > td:last-child{
    color: var(--color-3);
  }
  tbody tr{
    border-bottom: 1px solid #BEBEBE;
  }
  tbody tr:nth-last-child(1){
    border-bottom: none;
  }
`;

const BoxItem = styled.div`
 @media screen and (min-width: 768px){
    width: 65%;
  } 
`;

const BoxInfo = styled.aside`
  display: display;
  font-size: calc(var(--size) - .3em);

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

    .sending__note{
      strong{
        text-transform: uppercase;
      }
      margin: 15px 0;
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

function CheckCart(){
  const cart = useSelector(state => state.cart); 
  const {redirectTo} = useRedirect();

  useEffect(() => {
    if(cart.carts.length < 1){
      redirectTo('view-cart');
    }
  }, [cart]);

  return (<Container>
    <TitlePage>Checkout</TitlePage>
    <section>
      <BoxItem>
        <h3>Billing details</h3>
        <form action="">
          <div>
            <label>Full name *</label>
            <input type="text" placeholder="" autoComplete="off"/>
          </div>
          <div>
            <label>identification card *</label>
            <input type="text" placeholder="" autoComplete="off"/>
          </div>
          <div>
            <label>order notes (optional)</label>
            <textarea id="" name="" cols="30" rows="10"></textarea>
          </div>
        </form>
      </BoxItem>
      <BoxInfo> 
        <div>
          <TableStyled>
            <thead>
              <tr>
                <th colSpan="2">Your order</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
              {
                cart.carts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.title} x {product.quantity}</td>
                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                  </tr>
                ))
              }
              <tr>
                <td>Subtotal</td>
                <td>${ cart.subtotal.toFixed(2) }</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
              <tr>
                <td>IVA</td>
                <td>${ cart.iva }</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${ cart.total }</td>
              </tr>
            </tbody> 
          </TableStyled>
          <p className="sending__note">Your personal data will be used to process your order, support your experience on this website and for other purposes described in our privacy policies.</p>
          <br />
          <p className="sending__note"><label htmlFor="term">
            <input type="checkbox" id="term" />
            {' '} {' '}I have read and agree to the terms and conditions of the website.
          </label></p>
          <ButtonStyled hover radius="5px">Place your order</ButtonStyled>
        </div>
      </BoxInfo>
    </section>
  </Container>);
}

export default CheckCart;
