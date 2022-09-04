import React from 'react';
import { useSelector } from 'react-redux';
//import { addProductToCart } from '../features/carts/cartSlice';
import { CardItem } from '../styledComponent';


function CheckCart(){
    const cart = useSelector(state => state.cart); 
    
    const ShowProductAdded = () => {
        if(cart.carts.length < 1){
            return (<div>
                Your cart is empty 
                <button>keep shopping</button>
        </div>);
        }
        
        return cart.carts.map((product, index) => (
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
                </div>
            </CardItem>
        ));
    }
    return <ShowProductAdded />;
}

export default CheckCart;
