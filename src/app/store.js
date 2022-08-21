import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productSlice';
import cartReducer from '../features/carts/cartSlice';
import authReducer from '../features/auth/authSlice';
import usersReducer from '../features/users/usersSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        auth: authReducer,
        users: usersReducer
    }
});
