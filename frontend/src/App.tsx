import React from "react";
import Dashboard from "./components/Dashboard";
import AuthWare from './components/AuthWare'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Authentication from './modules/authentication/Authentication'
import NotFoundRedirect from './components/NotFoundRedirect'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth/*' element={<Authentication />} />

                <Route path='/dashboard/*' element={<AuthWare component={Dashboard} />} />
                <Route path='*' element={<NotFoundRedirect />}/>
            </Routes>
        </BrowserRouter>
    );

}

export default App;