import { useEffect } from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound.jsx';

function App() {
    const APP_NAME = "ShopOnline";

    useEffect(() => {
        document.querySelector("title").innerText = `${APP_NAME}`;
    }, []);

    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>     
        </>
    );
}

export default App;
