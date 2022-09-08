import './navbar.css';
import logo from './surfing__logo.svg'
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (


        <nav id="navbar" class="navbar">
        <div class="navbar__container">
            <div class="navbar__header">
                <div class="navbar__button">
                    <span class="navbar__bar"></span>
                    <span class="navbar__bar"></span>
                    <span class="navbar__bar"></span>
                </div>
                <div class="navbar__img">
                    <Link to="/" class="navbar__logo"><img src={logo} alt="" /></Link>
                </div>
            </div>
            <ul class="navbar__menu">
                <li class="navbar__item">
                    <a href="" class="navbar__link">
                        Surf
                    </a>
                </li>
                <li class="navbar__item">
                    <Link to="/realestate" class="navbar__link">Real Estate</Link>
                </li>
                <li class="navbar__item">
                    <a href="" class="navbar__link">
                        Vacation Homes
                    </a>
                </li>
                <li class="navbar__item">
                    <a href="" class="navbar__link">
                        Discover Nosara
                    </a>
                </li>
                <li class="navbar__item">
                    <a href="" class="navbar__link">
                        Blog
                    </a>
                </li>
                <li class="navbar__item">
                    <a href="" class="navbar__link">
                        Contact
                    </a>
                </li>
            </ul>

        </div>
    </nav>
    )
}

export default Navbar;