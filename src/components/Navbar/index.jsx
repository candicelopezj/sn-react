import './navbar.css';
// import './navbar.jsx'
import logo from '../../images/surfing__logo.svg'
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav id="navbar" className="navbar">
        <div className="navbar__container">
            <div className="navbar__header">
                <div className="navbar__button">
                    <span className="navbar__bar"></span>
                    <span className="navbar__bar"></span>
                    <span className="navbar__bar"></span>
                </div>
                <div className="navbar__img">
                    <Link to="/" className="navbar__logo"><img src={logo} alt="" /></Link>
                </div>
            </div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href='./Home' className="navbar__link">
                        Surf
                    </a>
                </li>
                <li className="navbar__item">
                    <Link to="/RealEstate" className="navbar__link">Real Estate</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/VacationHomes" href='./VacationHomes' className="navbar__link">
                        Vacation Homes
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link to="" href='./Home' className="navbar__link">
                        Discover Nosara
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link to="" href='./Home' className="navbar__link">
                        Blog
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link to="" href='./Home' className="navbar__link">
                        Contact
                    </Link>
                </li>
            </ul>

        </div>
    </nav>
    )
}

export default Navbar;