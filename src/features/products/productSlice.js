import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../libs/axios';

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (state) => {
        // api/v1/products
        const response = await axios.get('/products');
        return response.data;
    },
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: null
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload.product);
        }
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getProducts.fulfilled]: (state, {payload}) => {
            state.products = payload
            state.status = 'success'
        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
});


export default productSlice.reducer;
