import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addProductToCart } from '../features/carts/cartSlice';
import { getById } from '../features/products/productSlice';
import { useSelector, useDispatch } from 'react-redux';

function View(){ 
    const product = useSelector(state => state.products.getFinded);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [qty, setQty] = useState(1);

    const addCartToProduct = () => {
        let createdAt = new Date().getTime();
        let newProduct = {...product, quantity: qty, createdAt};
        dispatch(addProductToCart(newProduct));
    }

    useEffect(() => {
        dispatch(getById({ id }));
    }, [id]);

    return (<>
        {
            id ? <p>Param has a ID number: {product.title}</p> : <p>Param not found</p>
        }
        <button 
            onClick={() => setQty((prevState) => prevState + 1)}
        >Add</button>
        {' '} <strong>{qty}</strong> {' '}
        <button
            onClick={() => qty > 1 && setQty((prevState) => prevState - 1)}
        >Minus</button>
        <br />
        <button
            onClick={()=> addCartToProduct()}
        >Add cart</button>
    </>);
}

export default View;
