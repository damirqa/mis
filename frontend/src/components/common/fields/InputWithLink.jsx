import React from 'react';
import {Link} from "react-router-dom";

const InputWithLink = ({name, type = 'text', required = false, data, label, link, textLink, onChange}) => {
    return (
        <React.Fragment>
            <div className='flex justify-between'>
                <label htmlFor={name}
                       className="block mb-1 text-gray-900 dark:text-gray-300">{label}</label>
                <Link className='text-blue-600 hover:underline' to={link}>{textLink}</Link>
            </div>
            <input type={type} id={name} value={data[name]} onChange={onChange}
                   className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   required={required}/>
        </React.Fragment>
    );
};

export default InputWithLink;