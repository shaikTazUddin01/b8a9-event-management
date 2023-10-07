import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Shared/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* <h1>main</h1> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;