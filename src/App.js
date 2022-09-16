import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import Site from './pages/Site';
import Home from './pages/Home';
import View from './pages/View';
import CheckoutOrder from './pages/CheckoutOrder';
import ViewCart from './pages/ViewCart';
import NotFound from './pages/NotFound';
import { useRedirect } from './assets/helpers/redirect.hook';

function App() {

    const { URL_PATH } = useRedirect();
    
    return (
            <Routes>
                <Route path={`${URL_PATH}`} element={<Site />} >
                    <Route index element={<Home />} />
                    <Route path={`${URL_PATH}/view/detail=:id`} element={<View />} />
                    <Route path={`${URL_PATH}/view-cart`} element={<ViewCart />} />
                    <Route path={`${URL_PATH}/order-status`} element={<ViewCart />} />
                    <Route path={`${URL_PATH}/checkout-order`} element={<CheckoutOrder />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>     
    );
}

export default App;
