import { useEffect } from 'react';
import {NavBar} from './components/NavBar';
import {
    Routes,
    Route
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
    const APP_NAME = "ShopOnline";

    useEffect(() => {
        document.querySelector("title").innerText = `${APP_NAME}`;
    }, []);

    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>     
        </>
    );
}

export default App;
