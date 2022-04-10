import React from "react";
import Dashboard from "./components/Dashboard";
import Authentication from "./modules/authentication/Authentication";
import {useActions} from "./hooks/useActions";
import {store} from "./store";

function App() {
    const auth = store.getState().auth
    const {verifyAuthentication} = useActions()

    const isAuth = async () => {
        if (localStorage.getItem('token')) {
            await verifyAuthentication()
        }

        return !auth.loading && auth.authResponse?.user
    }

    return isAuth() ? <Dashboard/> : <Authentication/>
}

export default App;