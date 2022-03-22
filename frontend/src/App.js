import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Authentication from "./modules/authentication/Authentication";
import Registration from "./modules/authentication/Registration";
import PasswordReset from "./modules/authentication/PasswordReset";
import ForgotPassword from "./modules/authentication/ForgotPassword";
import AuthService from "./services/AuthService";
import AsideBar from "./components/asideBar/AsideBar";
import Dashboard from "./components/Dashboard";

function App() {
    const currentUser = AuthService.getCurrentUser()

    if (currentUser) {
        return (
            <BrowserRouter>
                <Dashboard/>
                <Routes>
                    <Route/>
                </Routes>
            </BrowserRouter>
        );
    }
    else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Authentication/>} />
                    <Route path='/register' element={<Registration/>} />
                    <Route path='/forgot-password' element={<ForgotPassword/>}/>
                    <Route path='/password-reset' element={<PasswordReset/>} />
                    <Route path='*' element={<Authentication/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
