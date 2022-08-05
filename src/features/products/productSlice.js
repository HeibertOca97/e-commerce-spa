import { createSlice } from '@reduxjs/toolkit';
import {
    products
} from '../../faker';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products,
        status: true,
        filters: []
    },
    reducers: {
        addProduct: (state, { payload }) => {
            state.products.push(payload.product);
        },
        filterProduct: (state, {type, payload }) => {
            // {category, title} = payload;
            console.log(payload)
            state.filters = state.products.filter(res => res.categories.find(cat => cat === payload.category));
        },
    }, 
});

export const { addProduct, filterProduct } = productSlice.actions;
export default productSlice.reducer;
