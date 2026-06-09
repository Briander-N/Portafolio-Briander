import { Main } from '../main/Main';
import './Header.css';
import { Link } from "react-router";

import logo from '../../assets/BNLOGO.png';

const Header = () => {
    return (

        <header>
            <nav class="navbar__container">
                
                <p className="navbar__logo">
                    <img src={logo} alt="Logo" className="navbar__logo-img" />
                </p>
                <ul class="navbar__menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#project">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
            <Main />
        </header>

    )
}

export default Header