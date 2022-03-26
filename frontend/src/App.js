import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./modules/authentication/Login";
import Registration from "./modules/authentication/Registration";
import PasswordReset from "./modules/authentication/PasswordReset";
import ForgotPassword from "./modules/authentication/ForgotPassword";
import AuthService from "./services/AuthService";
import ProjectService from './services/ProjectService'
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import CentralPlace from "./components/CentralPlace";

function App() {
    const currentUser = AuthService.getCurrentUser()
    const projects = currentUser ? ProjectService.getProjects(currentUser.id).data : null

    if (currentUser) {
        return (
            <BrowserRouter>
                <Navbar/>
                {projects
                    ? <Dashboard/>
                    : <CentralPlace><h1 className='text-4xl font-medium'>You don't have any projects</h1></CentralPlace>}
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
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Registration/>} />
                    <Route path='/forgot-password' element={<ForgotPassword/>}/>
                    <Route path='/password-reset' element={<PasswordReset/>} />
                    <Route path='*' element={<Login/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
