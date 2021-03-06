import { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';


export function ShoppingCartBar({ handleShoppingCartBarStatus, shoppingCartBarStatus }){ 
  const [productShoppingCart, setProductShoppingCart] = useState([]);
  
  useEffect(() =>{
    const getAllProducts = [
      {
        image: "https://th.bing.com/th/id/OIP.EsJChnN3f21BkOlBtYlXVQHaHa?pid=ImgDet&rs=1",
        title: "HELD CHAQUETA HAKUNA GRIS",
        price: 360.00
      },
      {
        image: "https://th.bing.com/th/id/OIP.EsJChnN3f21BkOlBtYlXVQHaHa?pid=ImgDet&rs=1",
        title: "HELD CHAQUETA HAKUNA GRIS",
        price: 360.00
      },
    ];
    setProductShoppingCart(getAllProducts);
  }, [])

  return (
    <div 
      style={{
        position: 'fixed',
        top: '0',
        right: '0',
        width: '100%',
        height: '100vh',
        maxWidth: '450px',
        backgroundColor: '#fff',
        transition: 'all 250ms',
        transform: shoppingCartBarStatus ? 'translateX(0%)' : 'translateX(100%)'
      }}
    > 
      <div 
        style={{
          color: '#fff',
          backgroundColor: "#1B366A",
          display: 'grid',
          gridTemplateColumns: '1fr 35px',
          padding: '10px'
        }}
      >
        <p>Mi carrito <span>{productShoppingCart.length}</span></p> <CloseIcon cursor="pointer" onClick={handleShoppingCartBarStatus}/> 
      </div>
      <div style={{
        overflow: 'auto',
        padding: '8px'
      }}>
        {
          productShoppingCart.map((product, index) => (
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
    </div>
  );
}
