import React from 'react';
import CentralPlace from "./CentralPlace";
import {useNavigate} from 'react-router-dom'

const NotAuthorized = () => {

    const navigate = useNavigate()

    const redirect = () => {
        navigate('/auth')
    }

    return (
        <CentralPlace>
            <div>
                <h1 className='text-4xl mb-3 font-medium'>Not authorized</h1>
                <button
                    onClick={redirect}
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full px-2 py-1.5 text-center'
                >
                    Sign in
                </button>
            </div>
        </CentralPlace>
    );
};

export default NotAuthorized;