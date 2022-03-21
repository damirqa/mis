import React from 'react';

const Alert = ({type, message}) => {
    let classType = 'p-3 mt-6 text-2xs rounded-lg ';

    switch (type) {
        case 'info':
            classType += 'text-blue-700 bg-blue-100';
            break;
        case 'danger':
            classType += 'text-red-700 bg-red-100';
            break;
        case 'success':
            classType += 'text-green-700 bg-green-100';
            break;
        case 'warning':
            classType += 'text-yellow-700 bg-yellow-100';
            break;
        case 'dark':
            classType += 'text-gray-700 bg-gray-100'

    }
    return (
        <div className={classType}
            role="alert">
                <span className="font-medium">
                    {message}
                </span>
        </div>
    );
};

export default Alert;