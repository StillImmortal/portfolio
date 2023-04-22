import React from "react";
import { motion } from "framer-motion"

// Styles
import "../../scss/components/hero.scss"

// Components
import ComputerCanvas from "./canvas/ComputerCanvas.jsx";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__image-container">
                    <div className="hero__round-icon"></div>
                    <div className="hero__line-icon"></div>
                </div>
                <div className="hero__text-container">
                    <h1 className="hero__title">
                        Hi, I'm <span>Nikita</span>
                    </h1>
                    <p className="hero__subtitle">
                        I develop 3D visuals, user interfaces and web applications
                    </p>
                </div>
            </div>
            
            <ComputerCanvas />
        </section>
    )
}