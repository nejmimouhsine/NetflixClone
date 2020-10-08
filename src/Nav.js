import React, { useState, useEffect } from 'react';
import './Nav.scss';

function Nav() {
    const [show, handleShow] = useState([]);

    useEffect(() => {
        window.addEventListener("scroll", () => window.scrollY > 100 ? handleShow(true) : handleShow(false))
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Nav;