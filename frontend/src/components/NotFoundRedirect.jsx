import React from 'react';
import {Navigate} from 'react-router-dom'

const NotFoundRedirect = () => {
    return <Navigate to='/dashboard'/>
};

export default NotFoundRedirect;