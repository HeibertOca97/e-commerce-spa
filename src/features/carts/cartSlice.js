import { createSlice } from '@reduxjs/toolkit';
import { 
    createModel,
    updateModel,
    getModel,
} from '../../faker';

const calculateAndGetSubtotal = (price, quantity) => {
    return parseFloat((price * quantity).toFixed(2));
}

const calculateAndGetIva = (subtotal) => {
    return parseFloat((subtotal * 0.12).toFixed(2));
}

const calculateAndGetTotal = (subtotal, iva) => {
    return parseFloat((subtotal + iva).toFixed(2));
}

const modelName = "carts";

createModel(modelName, {
    carts: [],
    quantity: 0,
    subtotal: 0,
    iva: 0,
    total: 0,
    getFinded:{},
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: getModel(modelName) || {},
    reducers: {
        updateQuantity: (state, { payload }) => {
            let getWantedData = state.carts.find(item => item.id === payload.id);
            
            if(getWantedData){
                state.quantity = (state.quantity - getWantedData.quantity) + payload.quantity;
                state.subtotal = (state.subtotal - calculateAndGetSubtotal(getWantedData.price, getWantedData.quantity)) + calculateAndGetSubtotal(getWantedData.price, payload.quantity);
                state.iva = calculateAndGetIva(state.subtotal);
                state.total = calculateAndGetTotal(state.subtotal, state.iva);
                getWantedData.quantity = payload.quantity;
                let getNewDataFilters = state.carts.filter(item => item.id !== payload.id); 
                state.carts = [...getNewDataFilters, getWantedData]; 
            }
            state.carts = state.carts.sort((a, b) => {
                if(a.createdAt > b.createdAt){
                    return -1;
                }
            });
            updateModel(modelName, state);
        },
        addProductToCart: (state, {payload}) => {
            let getWantedData = state.carts.find(item => item.id === payload.id);

            if(getWantedData){
                state.quantity += payload.quantity;
                state.subtotal += calculateAndGetSubtotal(payload.price, payload.quantity);
                state.iva = calculateAndGetIva(state.subtotal);
                state.total = calculateAndGetTotal(state.subtotal, state.iva);
                getWantedData.quantity += payload.quantity;
                getWantedData.color = payload.color;
                getWantedData.size = payload.size;
                let getNewDataFilters = state.carts.filter(item => item.id !== payload.id); 
                state.carts = [...getNewDataFilters, getWantedData];
                
            }else{
                state.carts.push(payload);
                state.quantity += payload.quantity;
                state.subtotal += calculateAndGetSubtotal(payload.price, payload.quantity);
                state.iva = calculateAndGetIva(state.subtotal);
                state.total = calculateAndGetTotal(state.subtotal, state.iva);
            }

            state.carts = state.carts.sort((a, b) => {
                if(a.createdAt > b.createdAt){
                    return -1;
                }
            });
            updateModel(modelName, state);
        },
        removeProductFromCart: (state, { payload }) => {
            let getWantedData = state.carts.find(item => item.id === payload.id);
            state.quantity -= getWantedData.quantity;
            state.subtotal = state.subtotal - calculateAndGetSubtotal(getWantedData.price, getWantedData.quantity);
            state.iva = calculateAndGetIva(state.subtotal);
            state.total = calculateAndGetTotal(state.subtotal, state.iva);
            let getNewDataFilters = state.carts.filter(item => item.id !== payload.id);
            state.carts = [...getNewDataFilters];
            state.carts = state.carts.sort((a, b) => {
                if(a.createdAt > b.createdAt){
                    return -1;
                }
            });
            updateModel(modelName, state);
        }
    }
});


export const { addProductToCart, removeProductFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
