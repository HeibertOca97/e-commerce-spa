import { createSlice } from '@reduxjs/toolkit';
import { 
    getModel, 
    createModel,
} from '../../faker';

const modelName = "users";


createModel(modelName, []);

const usersSlice = createSlice({
    name: modelName,
    initialState: {
        data: getModel(modelName) || [],
    },
    reducers: {}
});

export default usersSlice.reducer;
