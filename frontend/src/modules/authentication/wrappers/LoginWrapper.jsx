import React from 'react';
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import {useActions} from "../../../hooks/useActions";
import {useStore} from 'react-redux'

const LoginWrapper = () => {
    const {fetchUsers, login} = useActions()

    return (
        <Login fetchUsers={fetchUsers} login={login} navigate={useNavigate}/>
    );
};

export default LoginWrapper;