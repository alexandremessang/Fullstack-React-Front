import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header(props) {
    const [isLogged, setIsLogged] = useState(true); // si le User est connecté
    const [isLogMenuOpen, setIsLogMenuOpen] = useState(false);

    const showMenu = () => {
        if (!isLogMenuOpen) setIsLogMenuOpen(true)
        else setIsLogMenuOpen(false)
    }


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
                <div className="logContainer">
                    <div className="login" onClick={showMenu}>
                        <div className='hamLogo'><i class="fas fa-bars"></i></div>
                        <div className='userLogo'><i class="fas fa-user-circle"></i></div>
                    </div>
                    <div className="logMenu">
                        {
                            (isLogMenuOpen) ? <LogMenu isLogged={isLogged} ></LogMenu> : ''
                        }
                    </div>
                </div>
                

            </div>
            
        </header>
    )
}


function LogMenu(props) {
    const logPart = [];
    const logOutPart = [];

    if (props.isLogged) {
        logPart.push(
            <ul>
                <li>Messages</li>
                <li>Voyage</li>
                <li>Favoris</li>
                <div className="greySeparator"></div>
            </ul>
        )
        logOutPart.push(
            <ul>
                <div className="greySeparator"></div>
                <li>Déconnexion</li>
            </ul>
        )
    } else {
        logPart.push(
            <ul>
                <li>Inscription</li>
                <li>Connexion</li>
                <div className="greySeparator"></div>
            </ul>
        )
    }

    return (
        <div>
            <ul>
                {logPart}
                <ul>
                    <li>Héberger de voyageurs</li>
                    <li>Compte</li>
                </ul>
                {logOutPart}
            </ul>
        </div>
    )
}

export default Header;