import React from "react";
import Navegacion from '../Navegacion/Navegacion';
import './styles.css';

function Header() {
    return (
        <header className="header-container">
            <h1 className="logo">KinoWelt </h1>
            <Navegacion />
        </header>
    );
}

export default Header;
