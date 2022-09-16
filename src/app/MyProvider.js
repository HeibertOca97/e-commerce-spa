import {useState, createContext } from 'react'

function MyProvider(props){
    const [state, setState] = useState({
        shoppingCart: false,
    });
    return (<AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>);
}

export const AppContext = createContext();
export default MyProvider;
