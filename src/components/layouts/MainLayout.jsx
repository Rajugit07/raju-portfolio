import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = ({ children }) => (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto px-8 max-sm:px-2 py-8">{children}</main>
        <Footer />
    </div>
);

export default MainLayout;
