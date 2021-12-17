import { default as React } from 'react';
import { Route, Routes, Router, useNavigate } from 'react-router-dom';
import Homepage from './components/homepage';
import Chat from './components/chat';


const RouterNav = () => {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/chat" element={<Chat/>}/>
            {/* <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
        </Routes>
    )

    
}

export default RouterNav;