import React from "react";
import { NavLink } from "react-router-dom";

// Logo
import logo from "../../assets/logo-image.svg"

// Menu-icon
import menu from "../../assets/menu.svg"

export default function Header() {
    return (
        <header className="header" id="header">
            <nav className="header__navbar">
                <NavLink to="/" className="header__link logo-link">
                    <img src={logo} className="header__logo-image" />
                    <h1 className="header__logo-title">Make your dream ;)</h1>
                </NavLink>
                <ul className="header__list">
                    <li className="header__list-item"><NavLink to="/" className="header__link nav-link">About</NavLink></li>
                    <li className="header__list-item"><NavLink to="/" className="header__link nav-link">Work</NavLink></li>
                    <li className="header__list-item"><NavLink to="/" className="header__link nav-link">Contact</NavLink></li>
                </ul>
                <div className="header__menu-container">
                    <img src={menu} className="header__menu-icon" />
                </div>
            </nav>
        </header>
    )
}