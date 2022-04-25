import React, { useLayoutEffect, useState} from 'react';
import {store} from "../store";
import {useActions} from "../hooks/useActions";

const AuthWare = ({component: Component}) => {

    const {verifyAuthentication} = useActions()
    const [authStatus, setAuthStatus] = useState(false)

    useLayoutEffect(() => {

        const checkAuth = async () => {
            if (localStorage.getItem('token') && !authStatus) {
                await verifyAuthentication()
                const auth = store.getState().auth.authResponse?.user

                if (auth) {
                    setAuthStatus(true)
                }
            }
        }

        if (!authStatus) {
            checkAuth()
        }
    }, [])

    return <Component auth={authStatus}/>

};

export default AuthWare;