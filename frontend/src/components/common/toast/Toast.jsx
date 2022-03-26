import React from 'react';
import CloseButton from "../button/CloseButton";

const Toast = ({id, message, icon: Icon}) => {
    return (
        <div id={id}
             className="flex items-center p-4 mb-4 max-w-md text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
             role="alert" style={{float: 'right'}}>
            <Icon/>
            <div className="ml-3 text-sm font-normal">{message}</div>
            <CloseButton id={id}/>
        </div>
    );
};

export default Toast;