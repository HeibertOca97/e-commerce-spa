import { useEffect } from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import View from './pages/View';
import NotFound from './pages/NotFound.jsx';

function App() {
    const APP_NAME = "ShopOnline";

    useEffect(() => {
        document.querySelector("title").innerText = `${APP_NAME}`;
        console.log('useEffect App');
    }, []);

    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view/detail=:id" element={<View />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>     
    );
}

export default App;
