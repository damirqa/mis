import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import PasswordReset from "./PasswordReset";
import ForgotPassword from "./ForgotPassword";

const Authentication = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Registration/>} />
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/password-reset' element={<PasswordReset/>} />
                <Route path='*' element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Authentication;