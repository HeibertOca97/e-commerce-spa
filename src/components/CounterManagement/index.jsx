import React from 'react';
import styled from 'styled-components';
import { useCounter } from '../../assets/helpers/counter.hook';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../features/carts/cartSlice';

const CardCounter = styled.div`
  .card__flex{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    font-size: calc(var(--size) - .3em);
  }
  .card__flex:first-child > p{
    font-weight: bold;
  }
  .card__flex:last-child > p{
      color: var(--color-3);

  }

  p{
      padding: 10px 0px;
  }

  .card__action {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    position: relative;

    button, span{
      display: block;
      width: 100%;
      height: auto;
      font-weight: bold;
    }

    button{
      cursor: pointer;
      border-radius: 5px;
      border: none;
      padding: 10px 0px;
      font-size: calc(var(--size) - .1em);
      background-color: var(--color-1);
      color: #fff;
      transition: all 250ms linear;

      &:hover{
        background-color: var(--color-3);
      }
      @media screen and (min-width: 768px){
        font-size: calc(var(--size) + .1em);
      }
    }

    .btn__update{
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
    }
  }
`;

export function CounterManagement({ id, price, quantity }){
  const { count, increment, decrement } = useCounter(quantity);
  const dispatch = useDispatch();
  
  const handleUpdateQuantity = () => {
    dispatch(updateQuantity({ id, quantity: count }));
  } 

  return (<CardCounter>
    <div className="card__flex">
      <p>Price</p>
      <p>Quantity</p>
      <p>Subtotal</p>
    </div>
    <div className="card__flex">
      <p>${ price }</p>
      <div className="card__action">
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
        { count > quantity || count < quantity ? <button className="btn__update" onClick={handleUpdateQuantity}>UPDATE</button> : '' }
      </div>
      <p>${(price * quantity).toFixed(2)}</p>
    </div>

  </CardCounter>
  );
}
