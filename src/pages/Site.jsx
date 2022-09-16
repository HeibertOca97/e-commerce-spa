import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import MyProvider from '../app/MyProvider';

function Site(){
    return (
        <MyProvider>
            <NavBar/>
            <Outlet />
        </MyProvider>
    );
}

export default Site;
