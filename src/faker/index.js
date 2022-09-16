function deleteModel(modelName){
    if(window.localStorage.getItem(modelName)){
        window.localStorage.removeItem(modelName);
    }
}

function updateModel(modelName, data){
    if(window.localStorage.getItem(modelName)){
        window.localStorage.setItem(modelName, JSON.stringify(data));
    }
}

function createModel(modelName, data){
    if(!window.localStorage.getItem(modelName)){
        window.localStorage.setItem(modelName, JSON.stringify(data))
    }
}

function getModel(modelName){
    if(window.localStorage.getItem(modelName)){
        return JSON.parse(window.localStorage.getItem(modelName))
    }
    return null;
}

export {
    getModel,
    createModel,
    updateModel,
    deleteModel,
}
