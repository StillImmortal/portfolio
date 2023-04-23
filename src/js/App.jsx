import React from "react";

// Components
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

export default function App() {
    return (
        <div className="relative z-0 bg-primary">
             <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Header />
                <Hero />
            </div>
            <About />
        </div>
    )
}