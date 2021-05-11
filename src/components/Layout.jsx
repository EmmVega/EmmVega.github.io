import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/components/Layout.css'

const Layout = ({children}) => (
    <div className="layout">
        <Header/>
        {children}
        <Footer/>
    </div>
);

export default Layout;