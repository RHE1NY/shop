import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="logo"><img src="logo.jpg" width="70px" height="70px"></img>
                </div>
                <Link  to="/Shop" className="logo-text">
                  ALOHADANCE FUN
                </Link>
                <nav className="menu">
                    <Link to="/Shop" className="menu-item active">Товары</Link>
                    <Link to="/About" className="menu-item">О нас</Link>
                    <a href="#" className="menu-item">Доставка</a>
                    <a href="#" className="menu-item">Акции</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;