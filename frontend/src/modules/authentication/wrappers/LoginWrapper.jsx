import React from 'react';
import Login from "../Login";
import {useActions} from "../../../hooks/useActions";
import {useNavigate} from 'react-router-dom'

const LoginWrapper = () => {
    const {fetchUsers, login} = useActions()
    const navigate = useNavigate()

    return (
        <Login fetchUsers={fetchUsers} login={login} navigate={navigate}/>
    );
};

export default LoginWrapper;