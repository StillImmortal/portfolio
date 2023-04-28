import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"

// Logo
import logo from "../../assets/logo-image.svg"

// Images
import openMenuImage from "../../assets/menu.svg"
import closeMenuImage from "../../assets/close.svg"

// Constants
import { navLinks } from "../../constants/constants";
import { open, close } from "./redux/types";


export default function Header() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    function toggleMenu() {
        state.isMenuOpenImage ? dispatch(open()) : dispatch(close())
        console.log(state)
    }

    return (
        <>
        <header id="header" className={`fixed h-[80px] w-screen flex flex-row justify-center items-center bg-header z-50 ${state.headerType}`}>
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
                    <img src={`${state.isMenuOpenImage ? openMenuImage : closeMenuImage}`} alt="menu" className="w-[30px] object-cover" onClick={toggleMenu} />
                </div>
            </nav>
        </header>
        <div id="md-navbar" className={`md:hidden z-50 fixed w-[40vw] small-navbar top-[76px] left-[100%] rounded-bl-2xl rounded-tl-2xl border-4 border-header bg-tertiary ${state.isMenuOpenImage ? "" :"translate-x-[-100%]"}`}>
            <ul className="flex flex-col gap-5 p-5">
                {navLinks.map((link, index) => (
                    <li key={`link-${link.id}`} className="border-b-2 border-secondary"><a href={`#${link.id}`} className="text-link text-[20px] font-bold" onClick={toggleMenu}>{link.title}</a></li>
                ))}
            </ul>
        </div>
        </>

    )
}

