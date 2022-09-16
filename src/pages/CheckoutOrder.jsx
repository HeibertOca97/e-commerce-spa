import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetShoppingCart } from '../features/carts/cartSlice';
import styled from 'styled-components';
import { ContainerStyled, ButtonStyled } from '../styledComponent';
import { useRedirect } from '../assets/helpers/redirect.hook';
import { BoxLoading } from '../components/BoxLoading';

const Container = styled(ContainerStyled)`
  margin-top: 50px;
  margin-bottom: 50px;
  
  .text__bold{
    font-weight: bold; 
  }

  .info__required{
    color: #BE3636;
  }

  @media screen and (min-width: 768px){
    &>section{
      display: flex;
    }
  }
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

      &:first-child > th{
        display: block;
        width: 50%;
        padding: 15px 0;
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

    .sending__note{
      strong{
        text-transform: uppercase;
      }
      margin: 15px 0;
    }

    .card__note{
      margin: 25px 0;
      color: var(--color-4);
 
      .separate{
        display: block;
        width: 95%;
        margin: 25px auto;
      } 
      .info__link{
        span{
          display: block;
          margin: 0 0 20px 0;
          font-weight: bold;
        }
        p{
          margin: 0 auto;
          width: 90%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      }
      .info__personal{
        margin: 15px 0;
      }
      .info__term{
        font-weight: bold;
        cursor: pointer;
        display: block;
        padding: 9px;
        border: 1px solid transparent;
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

const FormOrder = styled.form`
  .text__title{
    padding: 15px;
    text-transform: uppercase;
    font-size: calc(var(--size) + .2em);
  }

  .alert__error{
    color: #BE3636;
    font-size: calc(var(--size) - .3em);
  }
  
  .card__info-1{
    margin: 0px auto 25px auto;
  }
  .card__info-2{
    margin: 50px auto 25px auto; 
  }
  .card__info-1, .card__info-2{
    
    @media screen and (min-width: 768px) {
      width: 90%; 
    }
  }

  .card__group{
    margin: 25px auto;
    
    input, textarea {
      display: block;
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      outline-color: var(--color-4);
      border: 1px solid var(--color-4);
    }

   textarea{
    min-width: 100%;
    max-width: 100%;
    min-height: 180px;
    max-height: 200px;
   } 

    label{
      display: block;
      font-weight:bold;
      color: var(--color-4);
      font-size: calc(var(--size) - .3em);
    }

    @media screen and (min-width: 768px) {
      width: 90%; 
    }
  }
`;

export default function CheckoutOrder(){
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart); 
  const {redirectTo} = useRedirect();
  const [order, setOrder] = useState({}); 
  const [load, setLoad] = useState(false);

  const getInputData = (ev) => {
    const data = {
      ...order,
      [ev.target.name]: ev.target.value
    }
    setOrder(data)
  }

  const createAlert = (input) => {
    let message = `This field is required`;
    input.style.border = "1px solid #BE3636";
    let span = input.parentElement.lastChild;
    span.setAttribute('class', 'alert__error');
    span.innerHTML = message;
  }

  const removeAlert = (input) => {
    input.style.border = "1px solid var(--color-4)";
    let span = input.parentElement.lastChild;
    span.removeAttribute('class');
    span.innerHTML = "";
  }


  const createShippingOrder = () => {
    const requiredFields = [
      'fullname', 
      'ci', 
      'country', 
      'address', 
      'city', 
      'region', 
      'postalcode', 
      'phone', 
      'email'
    ];
    var permission = false;

    for(let field of requiredFields){
      let input = document.querySelector(`input[name=${field}]`); 

      if(Object.hasOwn(order, field) && input.value){
        removeAlert(input);
      }

      if(!Object.hasOwn(order, field) || !input.value){
        permission = false;
        createAlert(input);
        return;
      }

      permission = true;
    }

    let inputTerm = document.querySelector("input[name=term]");

    if(!inputTerm.checked){
      inputTerm.parentElement.style.border = "1px solid #BE3636";
    }

    if(permission && inputTerm.checked){
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        setOrder({});
        document.querySelector("#formOrder").reset();
        inputTerm.parentElement.style.border = "1px solid transparent";
        inputTerm.checked = false;
        dispatch(resetShoppingCart());
        redirectTo('order-status');
      }, 2500);

    }
  }

  const checkingOrder = () => {
    if(cart.carts.length < 1){
      redirectTo('view-cart');
    }
  }

  useEffect(() => {
    checkingOrder();
  }, [dispatch]);

  return (<Container>
    <TitlePage>Checkout</TitlePage>
    <section>
      <BoxItem>
        { load && <BoxLoading /> }
        <FormOrder action="" id="formOrder">
          <div className="card__info-1">
            <h3 className="text__title">Billing details</h3>
          </div>
          <div className="card__group">
            <label htmlFor="fullname">Full name <span className="info__required">*</span></label>
            <input type="text" id="fullname" name="fullname" autoComplete="off" onKeyUp={getInputData}/>
            <span></span>
          </div>
          <div className="card__group">
            <label htmlFor="ci">Identification card <span className="info__required">*</span></label>
            <input type="text" id="ci" name="ci" autoComplete="off" onKeyUp={getInputData}/>
            <span></span>
          </div>
          <div className="card__group">
            <label htmlFor="company">Company name</label>
            <input type="text" id="company" name="company" autoComplete="off" onKeyUp={getInputData}/>
          </div>
          <div className="card__group">
            <label htmlFor="country">Country/Region <span className="info__required">*</span></label>
            <input type="text" id="country" name="country" autoComplete="off" onKeyUp={getInputData}/>
            <span></span>
          </div>
          <div className="card__group">
            <label htmlFor="address">Street direction <span className="info__required">*</span></label>
            <input type="text" id="address" name="address" autoComplete="off" onKeyUp={getInputData} placeholder="ex: House number and street name"/>
            <span></span>
          </div>
          <div className="card__group">
            <label htmlFor="apartment">Apartment, Room, etc (optional) </label>
            <input type="text" id="apartment" name="apartment" autoComplete="off" onKeyUp={getInputData}/>
          </div>
          <div className="card__group">
            <label htmlFor="city">Town/City <span className="info__required">*</span></label>
            <input type="text" id="city" name="city" autoComplete="off" onKeyUp={getInputData}/>
            <span></span>
          </div>
          <div className="card__group">
            <label htmlFor="region">Region/Province <span className="info__required">*</span></label>
            <input type="text" id="region" name="region" autoComplete="off" onKeyUp={getInputData}/>
            <span></span>
          </div>
          <div className="card__group">
            <label htmlFor="postalcode">Postal code <span className="info__required">*</span></label>
            <input type="text" id="postalcode" name="postalcode" autoComplete="off" onKeyUp={getInputData}/>
            <span></span>
          </div>
          <div className="card__group">
            <label htmlFor="phone">Phone <span className="info__required">*</span></label>
            <input type="text" id="phone" name="phone" autoComplete="off" onKeyUp={getInputData} placeholder="Country code + phone number ex: +593 XXXXXXXXX"/>
            <span></span>
          </div>
          <div className="card__group">
            <label htmlFor="email">Email address <span className="info__required">*</span></label>
            <input type="email" id="email" name="email" autoComplete="off" onKeyUp={getInputData}/>
            <span></span>
          </div>
          <div className="card__info-2">
            <h3>Send to a different address?</h3>
          </div>
          <div className="card__group">
            <label htmlFor="note">Order notes (optional)</label>
            <textarea id="note" name="ordernote" cols="30" rows="10" onKeyUp={getInputData} placeholder="Notes about your order, for example special notes for delivery"></textarea>
          </div>
        </FormOrder>
      </BoxItem>
      <BoxInfo> 
        <div>
          { load && <BoxLoading /> }
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
                <td className="text__bold">Subtotal</td>
                <td>${ cart.subtotal.toFixed(2) }</td>
              </tr>
              <tr>
                <td className="text__bold">Shipping</td>
                <td>Free shipping</td>
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
          <div className="card__note">
            <div className="info__link">
              <span className="info__link-title">Payment link</span>
              <p className="info__link-description">In the next few minutes you will receive a payment link from our advisors to your registered email.</p>
            </div>
            <hr className="separate" />
            <p className="info__personal">Your personal data will be used to process your order, support your experience on this website and for other purposes described in our privacy policies.</p>
            <label className="info__term" htmlFor="term">
              <input type="checkbox" name="term" id="term" />
              {' '} {' '}I have read and agree to the terms and conditions of the website. <span className="info__required">*</span>
            </label>
          </div>

          <ButtonStyled hover radius="5px" onClick={createShippingOrder}>Place your order</ButtonStyled>
        </div>
      </BoxInfo>
    </section>
  </Container>);
}
