import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Logo
import logo from "../../assets/logo-image.svg"

// Menu-icon
import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"

// Styles
import { styles } from "../../styles/styles";

export default function Header() {
    const [menuState, setMenuState] = useState(false)

    function toggleMenu() {
        setMenuState((prevState) => !prevState)
    }

    return (
        <header className="fixed h-[80px] w-screen flex flex-row justify-center items-center bg-header z-50" id="header">
            <nav className="flex flex-row justify-between items-center h-full w-full max-w-[1400px] gap-8 px-12 py-2">
                <NavLink to="/" className="flex flex-row h-full items-center gap-3">
                    <img src={logo} className="h-[60px] w-[60px]" />
                    <h1 className="hidden sm:inline text-2xl font-bold">Make your dream ;)</h1>
                </NavLink>
                <ul className="hidden md:flex flex-row gap-6 text-lg font-semibold">
                    <li><NavLink to="/" className="text-link">About</NavLink></li>
                    <li><NavLink to="/" className="text-link">Work</NavLink></li>
                    <li><NavLink to="/" className="text-link">Contact</NavLink></li>
                </ul>
                <div className="md:hidden h-full display flex flex-row items-center justify-center">
                    <span className={`w-[30px] h-[30px] bg-center bg-no-repeat bg-cover ${menuState ? "bg-menu-open" : "bg-menu-close"}`} onClick={toggleMenu}></span>
                </div>
            </nav>
        </header>
    )
}