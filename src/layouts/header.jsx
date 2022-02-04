import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header(props) {

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
        localStorage.removeItem('token');
        props.setIsLogged(false);
    }

    function expand() {
        props.setIsLogMenuOpen(true);
    }

    function close() {
        props.setIsLogMenuOpen(false);
    }

    // The debounce function receives our function as a parameter
    const debounce = (fn) => {

        // This holds the requestAnimationFrame reference, so we can cancel it if we wish
        let frame;
    
        // The debounce function returns a new function that can receive a variable number of arguments
        return (...params) => {
        
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) { 
            cancelAnimationFrame(frame);
        }
    
        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
            
            // Call our function and pass any params we received
            fn(...params);
        });
    
        } 
    };
    
    
    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
        document.documentElement.dataset.scroll = window.scrollY;
    }
    
    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });
    
    // Update scroll position for first time
    storeScroll();
  

    


    return (
        <header>
            <div className="headerContainer" >
                <div className="logo">
                    <Link to="/" >ZeBnB</Link>
                </div>
                <nav className="navLinks">
                    <ul>
                        <li><Link to="/become-a-host">Devenez hôte</Link></li>
                    </ul>
                </nav>
                <div className="logContainer" onClick={(e) => showMenu(e)} onBlur={close}>
                    <div className="login">
                        <div className='hamLogo'><i class="fas fa-bars"></i></div>
                        <div className='userLogo'><i class="fas fa-user-circle"></i></div>
                    </div>
                    <div className="logMenu" id='logMenu'>
                        {
                            (props.isLogMenuOpen) ? <LogMenu isLogged={props.isLogged} handleDisconnect={handleDisconnect}></LogMenu> : ''
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
                <li className="menuLink" ><Link to="/signin">Inscription</Link></li>
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