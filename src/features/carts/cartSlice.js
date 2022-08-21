import { createSlice } from '@reduxjs/toolkit';
import { 
    createModel,
    updateModel,
    getModel,
    deleteModel,
} from '../../faker';

const modelName = "carts";

createModel(modelName, {
    carts: [],
    quantity: 0,
    total: 0,
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: getModel(modelName) || {},
    reducers: {
        addProduct: (state, {payload}) => {
            let getFind = state.carts.find(item => item.id === payload.id);
            if(getFind){
                getFind.quantity += payload.quantity;
                const getFilter = state.carts.filter(item => item.id !== payload.id); 

                state.carts = [getFind, ...getFilter];
                const qty = state.carts.reduce((acc, el) => acc.concat(el.quantity),[]).reduce((acc, el) => acc + el,0);
                const total = state.carts.reduce((acc, el) => acc.concat(el.price + el.price),[]).reduce((acc, el) => acc + el,0);
                state.quantity = qty;
                state.total = total;
            }else{
                state.carts.push(payload);
                state.quantity += payload.quantity;
                state.total += payload.price;
            }
            updateModel(modelName, state);
        },

    }
});


export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;