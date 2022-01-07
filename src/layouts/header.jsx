import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header(props) {
    return (
        <header>
            <div className="headerContainer" >
                <div className="logo">
                    ZeBnB
                </div>
                <nav className="navLinks">
                    <ul>
                        <li><Link to="#">Devenez hôte</Link></li>
                    </ul>
                </nav>
                <div className="login">
                    login
                </div>
            </div>
            
        </header>
    )
}

export default Header;