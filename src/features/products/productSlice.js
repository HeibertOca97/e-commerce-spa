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
        getByCategory: (state, {payload}) => {
            state.status = true;
            state.filters = state.products.filter(item => item.categories.find(data => data === payload.category));
        },
        getByName: (state, { payload }) => {
            if(payload.category !== "all" || !payload.category){
                let getProducts = state.filters.filter(item => item.title.toLocaleLowerCase().slice(0, payload.name.length) === payload.name.toLocaleLowerCase() && item.categories.find(data => data === payload.category));
                state.filters = getProducts;

                if(getProducts.length > 0){
                    state.status = true;
                    return;
                }
                state.status = false;
                return;
            }

            let getProducts = state.products.filter(item => item.title.toLocaleLowerCase().slice(0, payload.name.length) === payload.name.toLocaleLowerCase())
            state.filters = getProducts;

            if(getProducts.length > 0){
                state.status = true;
                return;
            }
            state.status = false;

        },
        getById: (state, { payload }) =>{
            let getWantedData = state.products.find(item => item.id === payload.id);
            state.getFinded = getWantedData;
        }
    }, 
});

export const { addProduct, getByCategory, getByName, getById } = productSlice.actions;
export default productSlice.reducer;
