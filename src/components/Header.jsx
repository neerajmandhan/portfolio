import React from "react";

import { useState, useEffect } from "react";
function Header() {
    const [stickyClass, setStickyClass] = useState("");
    const [active, setActive] = useState(false);
    // or navbar stickyness
    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);

        return () => {
            window.removeEventListener("scroll", stickNavbar);
        };
    }, []);
    // Condition for navbar window if it exceeds, then ikt will become active
    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 100 ? setStickyClass("sticky") : setStickyClass("");
        }
    };

    return (
        // The sticky class will be added and otherwise remove according to the user response
        <header className={`${stickyClass}`}> 
            <div className="header-inner">
                <span className="logo">Neeraj.</span>
                <div className="links">
                    <a className="link" href="#banner">
                        Home
                    </a>
                    <a className="link" href="#services">
                        Sevices
                    </a>
                    <a className="link" href="#experiences">
                        Experience
                    </a>
                    <a className="link" href="#projects">
                        Projects
                    </a>
                </div>
                {/* This event will be active if the ipad or mobile size will be active otherwise removed and links will not be displayed in block */}
                <span className="menu" onClick={() => setActive(!active)}>
                    <i className="fas fa-bars"></i>
                </span>
            </div>
            <div className={`mobile-links ${active ? "active" : ""}`}>
                <a className="link" onClick={() => setActive(!active)} href="#banner">
                    Home
                </a>
                <a className="link" onClick={() => setActive(!active)} href="#services">
                    Sevices
                </a>
                <a
                    className="link"
                    onClick={() => setActive(!active)}
                    href="#experiences"
                >
                    Experience
                </a>
                <a className="link" onClick={() => setActive(!active)} href="#projects">
                    Projects
                </a>
            </div>
        </header>
    );
}

export default Header;
