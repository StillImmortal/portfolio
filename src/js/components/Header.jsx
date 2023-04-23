import React from "react";
import { NavLink } from "react-router-dom";

// Logo
import logo from "../../assets/logo-image.svg"

// Menu-icon
import menu from "../../assets/menu.svg"

// Styles
import { styles } from "../../styles/styles";

export default function Header() {
    return (
        <header className="fixed h-[80px] w-screen flex flex-row justify-center items-center bg-header" id="header">
            <nav className="flex flex-row justify-between items-center h-full w-full max-w-[1400px] gap-8 px-12 py-2">
                <NavLink to="/" className="flex flex-row h-full items-center gap-3">
                    <img src={logo} className="h-[60px] w-[60px]" />
                    <h1 className="hidden sm:inline text-2xl font-bold">Make your dream ;)</h1>
                </NavLink>
                <ul className="hidden md:flex flex-row gap-5 text-lg font-semibold">
                    <li className=""><NavLink to="/" className="">About</NavLink></li>
                    <li className=""><NavLink to="/" className="">Work</NavLink></li>
                    <li className=""><NavLink to="/" className="">Contact</NavLink></li>
                </ul>
                <div className="md:hidden h-full display flex flex-row items-center justify-center">
                    <img src={menu} className="h-[35px] w-[35px]" />
                </div>
            </nav>
        </header>
    )
}