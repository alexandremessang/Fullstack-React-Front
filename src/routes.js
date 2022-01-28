import { default as React } from 'react';
import { Route, Routes, Router, useNavigate } from 'react-router-dom';
import Homepage from './components/homepage';
import Chat from './components/chat';

import Login from './components/auth/Login';
import Signin from './components/auth/Signin'
import Explore from './components/Explore';

const RouterNav = () => {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/chat" element={<Chat/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signin" element={<Signin/>}/>
            <Route exact path="/explore" element={<Explore/>}/>
        </Routes>
    )

    
}

export default RouterNav;