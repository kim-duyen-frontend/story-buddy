import React from 'react';
import Banner from '../features/banner';

const MainLayout = ({ children }) => {
    return (
        <>
            <Banner />
            {children}
        </>
    );
};

export default MainLayout;