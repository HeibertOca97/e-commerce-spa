import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productSlice';
import cartReducer from '../features/carts/cartSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    }
});
