import React from "react";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <SocialLinks />
            <MainLayout>
                <Home />
                <Projects />
                <Contact />
            </MainLayout>
        </>
    );
}

export default App;
