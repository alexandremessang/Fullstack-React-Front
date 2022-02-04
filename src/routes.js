import { default as React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import Chat from './components/chat';

import Login from './components/auth/Login';
import Signin from './components/auth/Signin'
import Explore from './components/Explore';
import BecomeHost from './components/user/BecomeHost';

const RouterNav = (props) => {



    return (
        <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/chat" element={<Chat/>}/>
            <Route exact path="/login" element={<Login setIsLogged={props.setIsLogged} isLogged={props.isLogged}/>}/>
            <Route exact path="/signin" element={<Signin setIsLogged={props.setIsLogged} isLogged={props.isLogged}/>}/>
            <Route exact path="/explore" element={<Explore/>}/>

            {/* Routes requiring auth */}
            <Route exact path="/become-a-host" element={(props.isLogged) ?
                <BecomeHost/> 
                : <Login setIsLogged={props.setIsLogged} isLogged={props.isLogged}/>}
            />

        </Routes>
    )

    
}

export default RouterNav;