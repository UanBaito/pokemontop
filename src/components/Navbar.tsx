import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"; 
import logo from "../assets/Poké_Ball_icon.svg"

export default function Navbar() {


    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo}/>
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