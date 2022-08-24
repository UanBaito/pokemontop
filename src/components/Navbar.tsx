import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"; 

export default function Navbar() {


    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/src/assets/Poké_Ball_icon.svg"/>
                <h1>Poketop</h1>
            </div>
            <ul className="social">
                <li>
                    <a href="https://github.com/UanBaito/pokemontop" target={"blank"}><FontAwesomeIcon icon={faSquareGithub} /></a>
                </li>
            </ul>
        </nav>
    )
}