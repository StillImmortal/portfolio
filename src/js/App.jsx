import React from "react";

// Components
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

export default function App() {
    return (
        <div className="bg-tertiary">
            <Header />
            {/* <main>
                <Hero />
                <About />
            </main> */}
        </div>
    )
}