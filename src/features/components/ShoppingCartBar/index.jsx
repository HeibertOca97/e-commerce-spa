import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../carts/cartSlice'
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from "styled-components";
import { ModalStyled } from '../../../styledComponent';

const ContainerBar = styled.div` 
    ${(props) => props.zindex && `z-index: ${props.zindex};`};
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 450px;
    background-color: #fff;
    transition: all 200ms;
    transform: ${(props) => props.status ? 'translateX(0%)' : 'translateX(100%)'};
  `;

export function ShoppingCartBar({ handleShoppingCartBarStatus, shoppingCartBarStatus }){ 
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [headerHeight, setHeaderHeight] = useState(0);

  const setHeightForHeaderCart = () => {
    const height = document.querySelector("body header").clientHeight;
    setHeaderHeight(height);
  }
  useEffect(() =>{
    const getAllProducts = [
      {
        image: "https://th.bing.com/th/id/OIP.EsJChnN3f21BkOlBtYlXVQHaHa?pid=ImgDet&rs=1",
        title: "HELD CHAQUETA HAKUNA GRIS",
        price: 200.00
      },
      {
        image: "https://th.bing.com/th/id/OIP.EsJChnN3f21BkOlBtYlXVQHaHa?pid=ImgDet&rs=1",
        title: "HELD CHAQUETA HAKUNA GRIS",
        price: 360.00
      },
    ];
    for(let product of getAllProducts){
      dispatch(addProduct({
        product: product,
        price: product.price,
        quantity: 1
      }));  
    }
    setHeightForHeaderCart();
  }, [])



  return (
    <>
      <ModalStyled zindex={shoppingCartBarStatus && 50} status={shoppingCartBarStatus}/>
      <ContainerBar zindex={60} status={shoppingCartBarStatus}> 
        <div 
          style={{
            color: '#fff',
            backgroundColor: "#1B366A",
            display: 'grid',
            gridTemplateColumns: '1fr 35px',
            padding: '10px',
            fontWeight: 'bold',
            height: `${headerHeight > 0 ? `${headerHeight}px` : 'auto'}`
          }}
        >
          <p>My cart <span>{cart.quantity} (${cart.total})</span></p> <CloseIcon cursor="pointer" onClick={handleShoppingCartBarStatus}/> 
        </div>
        <div style={{
          overflow: 'auto',
          padding: '8px'
        }}>
          {
            cart.products.map((product, index) => (
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: '150px 1fr'
                }}
                key={index}

              >
                <picture style={{
                  display: 'block',
                  width: '100px',
                  margin: 'auto'
                }}><img 
                  src={product.image}
                  alt={product.title}
                  style={{
                    display: 'block',
                    width: '100%'
                  }}
                /></picture>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 40px'
                }}>
                  <div>
                    <h4>{ product.title }</h4>
                    <p><strong>$ { product.price }</strong></p>
                  </div>
                  <DeleteIcon />
                </div>
              </div>
            ))
          }


        </div>
      </ContainerBar>
    </>

  );
}
