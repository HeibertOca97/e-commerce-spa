import { v4 as uuidv4 } from 'uuid'
import { createSlice } from '@reduxjs/toolkit';
import { 
    createModel,
    updateModel,
    getModel, 
} from '../../faker';
import Cookies from 'js-cookie';

const modelName = "authUser";
const modelName2 = "users";

const timestamp = {
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
}

createModel(modelName, {});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authUser: getModel(modelName) || {},
        message: null,
    },
    reducers: {
        login: (state, { payload }) => {
            const users = getModel(modelName2);
                const user = users.filter(data => data.email === payload.email)[0];
                const {password, ...newData} = user;
                state.message = null;
                state.authUser = newData;
                updateModel(modelName, newData);
                Cookies.set('token', uuidv4())
        },
        register: (state, {payload}) => {
            const users = getModel(modelName2);

            let newRegister = {id: uuidv4(), ...payload, ...timestamp};
            updateModel(modelName2, [newRegister, ...users]);

            const {password, ...newData} = newRegister;
            state.authUser = newData;
            updateModel(modelName, newData);
            Cookies.set('token', uuidv4())
        },
        logout: (state) => {
            updateModel(modelName, {});
            state.authUser = {};
            state.message = null;
            Cookies.remove('token');
        }
    }
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
