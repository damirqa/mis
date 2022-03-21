import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Authentication from "./modules/authentication/Authentication";
import Registration from "./modules/authentication/Registration";
import PasswordReset from "./modules/authentication/PasswordReset";
import ForgotPassword from "./modules/authentication/ForgotPassword";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Authentication/>} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/password-reset' element={<PasswordReset/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
