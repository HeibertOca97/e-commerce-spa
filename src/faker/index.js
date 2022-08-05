import { newProducts } from './api.products';
//import { cart } from './api.cart';

function createAndGetDataOfLocalStorage(modelName, model) {
    const modelString = JSON.stringify(model);
    let modelJson = [];
    if(!window.localStorage.getItem(modelName)){
        window.localStorage.setItem(modelName, modelString)
    }

    if(window.localStorage.getItem(modelName)){
        const storage = window.localStorage.getItem(modelName);
        modelJson = JSON.parse(storage);
        return modelJson;
    }

    return modelJson;
}

function updateDataOfLocalStorage(modelName, data) {
    const dataString = JSON.stringify(data);

    if(window.localStorage.getItem(modelName)){
        window.localStorage.setItem(modelName, dataString);
    }
}

function getModel(modelName){
    if(window.localStorage.getItem(modelName)){
        return window.localStorage.getItem(modelName)
    }
};

const products = createAndGetDataOfLocalStorage('products', newProducts);
const carts = createAndGetDataOfLocalStorage('carts', {
    carts: [],
    quantity: 0,
    total: 0,
});

export {
    products,
    carts,
    updateDataOfLocalStorage,
    getModel,
}
