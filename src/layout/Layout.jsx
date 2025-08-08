import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/Header.jsx';
import Footer from "../components/Footer.jsx";
import ScrollTop from "../components/ScrollTop.jsx";
function Layout() {
    return (
        <div className="min-h-screen bg-gray-800 flex flex-col overflow-hidden ">
            <ScrollTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;
