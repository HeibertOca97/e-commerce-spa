import { createSlice } from '@reduxjs/toolkit';
import {
    createModel,
    getModel,
} from '../../faker';
import { newProducts } from '../../faker/api.products'

const modelName = "products";
createModel(modelName, newProducts);

const productSlice = createSlice({
    name: modelName,
    initialState: {
        products: getModel(modelName) || [],
        status: true,
        filters: [],
        getFinded: {},
    },
    reducers: {
        addProduct: (state, { payload }) => {
            state.products.push(payload.product);
        },
        filterProduct: (state, { payload }) => {
            const {category, name} = payload;

            if(!name && !category){
                state.filters = state.products.filter(res => res.categories.find(cat => cat === category));
                return;
            }

            state.filters = state.products.filter(res => res.title.toLocaleLowerCase().slice(0, name.length) === name.toLocaleLowerCase() && res.categories.find(cat => cat === category));
            
        },
        getById: (state, { payload }) =>{
            let getWantedData = state.products.find(item => item.id === payload.id);
            state.getFinded = getWantedData;
        }
    }, 
});

export const { addProduct, filterProduct, getById } = productSlice.actions;
export default productSlice.reducer;
