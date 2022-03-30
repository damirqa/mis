import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthService from "./services/AuthService";
import ProjectService from './services/ProjectService'
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import CentralPlace from "./components/CentralPlace";
import Authentication from "./modules/authentication/Authentication";

function App() {
    const currentUser = AuthService.getCurrentUser()

    return currentUser ? <Dashboard/> : <Authentication/>

}

export default App;

// <BrowserRouter>
//     <Navbar/>
//     {projects
//         ? <Dashboard/>
//         : <CentralPlace><h1 className='text-4xl font-medium'>You don't have any projects</h1></CentralPlace>}
//     <Routes>
//         <Route/>
//     </Routes>
// </BrowserRouter>