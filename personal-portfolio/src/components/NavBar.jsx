import React from "react";
import { FaAlignJustify } from "react-icons/fa";

function NavBar () {
    const [state, setState] = React.useState(true);
    return(
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <img src="./imagenes/arge.png" alt="" />
                        </div>
                    </ul>
                    {state ? (
                        <ul className="navbar__right">
                            <li><a href="Inicio">Inicio</a></li>
                            <li><a href="#Services">Services</a></li>
                            <li><a href="#About">About Me</a></li>
                            <li><a href="#Portfolio">Portfolio</a></li>
                            <li><a href="#Blog">Social Networks</a></li>
                            <li><a href="#contact-form">Contact</a></li>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
        </nav>
    )
}

export default NavBar;