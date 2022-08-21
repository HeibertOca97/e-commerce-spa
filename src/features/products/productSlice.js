import { createSlice } from '@reduxjs/toolkit';
import {
    createModel,
    updateModel,
    getModel,
    deleteModel,    
} from '../../faker';
import { newProducts } from '../../faker/api.products'

const modelName = "products";
createModel(modelName, newProducts);

const productSlice = createSlice({
    name: modelName,
    initialState: {
        products: getModel(modelName) || [],
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
