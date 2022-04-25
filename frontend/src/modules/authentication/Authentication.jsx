import React from 'react';
import {Route, Routes} from "react-router-dom";
import Registration from "./Registration";
import PasswordReset from "./PasswordReset";
import ForgotPassword from "./ForgotPassword";
import LoginWrapper from "./wrappers/LoginWrapper";
import CentralPlace from "../../components/CentralPlace";

const Authentication = () => {
    return (
        <CentralPlace>
            <Routes>
                <Route path='/login' element={<LoginWrapper/>} />
                <Route path='/register' element={<Registration/>} />
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/password-reset' element={<PasswordReset/>} />
                <Route path='*' element={<LoginWrapper/>} />
            </Routes>
        </CentralPlace>
    );
};

export default Authentication;