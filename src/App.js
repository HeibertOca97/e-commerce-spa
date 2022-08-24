import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import Site from './pages/Site';
import Home from './pages/Home';
//import Login from './pages/Login';
//import Register from './pages/Register';
import View from './pages/View';
import CheckCart from './pages/CheckCart';
import NotFound from './pages/NotFound';

const URL_PATH = "/e-commerce-spa";

function App() {

    return (
            <Routes>
                <Route path={`${URL_PATH}`} element={<Site />} >
                    <Route index element={<Home />} />
                    <Route path={`${URL_PATH}/view/detail=:id`} element={<View />} />
                    <Route path={`${URL_PATH}/check-cart`} element={<CheckCart />} />
                    {`<Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />`}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>     
    );
}

export default App;
