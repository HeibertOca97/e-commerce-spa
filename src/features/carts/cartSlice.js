import { createSlice } from '@reduxjs/toolkit';
import { 
    createModel,
    updateModel,
    getModel,
} from '../../faker';

const modelName = "carts";

createModel(modelName, {
    carts: [],
    quantity: 0,
    total: 0,
    getFinded:{},
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: getModel(modelName) || {},
    reducers: {
        addProductToCart: (state, {payload}) => {
            let getWantedData = state.carts.find(item => item.id === payload.id);

            if(getWantedData){
                state.quantity += payload.quantity;
                state.total += parseFloat((payload.quantity * payload.price).toFixed(2));
                getWantedData.quantity += payload.quantity;
                let getNewDataFilters = state.carts.filter(item => item.id !== payload.id); 
                state.carts = [...getNewDataFilters, getWantedData];
            }else{
                state.carts.push(payload);
                state.quantity += payload.quantity;
                state.total += parseFloat((payload.quantity * payload.price).toFixed(2));
            }
            updateModel(modelName, state);
        },
        removeProductFromCart: (state, { payload }) => {
            let getWantedData = state.carts.find(item => item.id === payload.id);
            state.quantity -= getWantedData.quantity;
            state.total -= parseFloat((getWantedData.quantity * getWantedData.price).toFixed(2));
            let getNewDataFilters = state.carts.filter(item => item.id !== payload.id);
            state.carts = [...getNewDataFilters];

            updateModel(modelName, state);
        }
    }
});


export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
