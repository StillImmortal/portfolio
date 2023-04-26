import React from "react";

// Components
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Tech from "./components/Tech.jsx";
import Works from "./components/Works.jsx";
import Feedback from "./components/Feedback.jsx";

export default function App() {
    return (
        <div className="relative z-0 bg-primary">
             <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Header />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedback />
        </div>
    )
}