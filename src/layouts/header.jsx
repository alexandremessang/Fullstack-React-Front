import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header(props) {
    const [isLogged, setIsLogged] = useState(true); // si le User est connecté

    const showMenu = (e) => {
        if (!props.isLogMenuOpen) {
            props.setIsLogMenuOpen(true)
            e.target.focus()
        } 
        else {
            props.setIsLogMenuOpen(false)
            e.target.blur()
        } 
    }

    const handleDisconnect = () => {
        //todo api disconect
        setIsLogged(false);
    }

    function expand() {
        props.setIsLogMenuOpen(true);
    }

    function close() {
        props.setIsLogMenuOpen(false);
    }

    


    return (
        <header>
            <div className="headerContainer" >
                <div className="logo">
                    <Link to="/" >ZeBnB</Link>
                </div>
                <nav className="navLinks">
                    <ul>
                        <li><Link to="#">Devenez hôte</Link></li>
                    </ul>
                </nav>
                <div className="logContainer" onClick={(e) => showMenu(e)} onBlur={close}>
                    <div className="login">
                        <div className='hamLogo'><i class="fas fa-bars"></i></div>
                        <div className='userLogo'><i class="fas fa-user-circle"></i></div>
                    </div>
                    <div className="logMenu" id='logMenu'>
                        {
                            (props.isLogMenuOpen) ? <LogMenu isLogged={isLogged} handleDisconnect={handleDisconnect}></LogMenu> : ''
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
                <li className="menuLink">Messages</li>
                <li className="menuLink">Voyage</li>
                <li className="menuLink">Favoris</li>
                <div className="greySeparator"></div>
            </ul>
        )
        logOutPart.push(
            <ul>
                <div className="greySeparator"></div>
                <li className="menuLink" onClick={props.handleDisconnect}>Déconnexion</li>
            </ul>
        )
    } else {
        logPart.push(
            <ul>
                <li className="menuLink" >Inscription</li>
                <li className="menuLink"><Link to="/login" onClick={props.select}>Connexion</Link></li>
                <div className="greySeparator"></div>
            </ul>
        )
    }

    return (
        <div>
            <ul>
                {logPart}
                <ul>
                    <li className="menuLink">Héberger de voyageurs</li>
                    <li className="menuLink">Compte</li>
                </ul>
                {logOutPart}
            </ul>
        </div>
    )
}

export default Header;