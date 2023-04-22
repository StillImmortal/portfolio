import React from "react";

// Components
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Hero />
            </main>
        </div>
    )
}