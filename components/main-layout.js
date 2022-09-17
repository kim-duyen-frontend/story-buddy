import React from 'react';
import Navbar from '../features/navbar';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;