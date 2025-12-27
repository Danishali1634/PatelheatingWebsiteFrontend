import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 400px)' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
