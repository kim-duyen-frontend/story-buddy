import React from 'react';
import Banner from '../features/banner';
import Footer from '../features/footer';


const MainLayout = ({ children }) => {
    return (
        <>
            <Banner />
            {children}
            <Footer/>
        </>
    );
};

export default MainLayout;