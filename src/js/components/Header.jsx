import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Logo
import logo from "../../assets/logo-image.svg"

// Images
import openMenu from "../../assets/menu.svg"
import closemenu from "../../assets/close.svg"

// Constants
import { navLinks } from "../../constants/constants";


export default function Header() {
    const [menuState, setMenuState] = useState(true)

    function toggleMenu() {
        setMenuState((prevState) => !prevState)
    }

    return (
        <>
        <header className="fixed h-[80px] w-screen flex flex-row justify-center items-center bg-header z-50" id="header">
            <nav className="flex flex-row justify-between items-center h-full w-full max-w-[1400px] gap-8 px-12 py-2">
                <Link to="/" className="flex flex-row h-full items-center gap-3">
                    <img src={logo} className="h-[60px] w-[60px]" />
                    <h1 className="hidden sm:inline text-2xl font-bold">Make your dream ;)</h1>
                </Link>
                <ul className="hidden md:flex flex-row gap-6 text-lg font-semibold">
                    {navLinks.map((link, index) => (
                        <li key={`link-${link.id}`}><a href={`#${link.id}`} className="text-link text-[20px]">{link.title}</a></li>
                    ))}
                </ul>
                <div className="md:hidden h-full display flex flex-row items-center justify-center">
                    <img src={`${menuState ? openMenu : closemenu}`} alt="menu" className="w-[30px] object-cover" onClick={toggleMenu} />
                </div>
            </nav>
        </header>
        <div id="md-navbar" className={`md:hidden z-50 fixed w-[40vw] small-navbar top-[76px] left-[100%] rounded-bl-2xl rounded-tl-2xl border-4 border-header bg-tertiary ${menuState ? "" :"translate-x-[-100%]"}`}>
            <ul className="flex flex-col gap-5 p-5">
                {navLinks.map((link, index) => (
                    <li key={`link-${link.id}`} className="border-b-2 border-secondary"><a href={`#${link.id}`} className="text-link text-[20px] font-bold" onClick={toggleMenu}>{link.title}</a></li>
                ))}
            </ul>
        </div>
        </>

    )
}
