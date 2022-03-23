import React from 'react';

const Textarea = ({name, label, onChange}) => {
    return (
        <React.Fragment>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
            <textarea id={name} rows="4" onChange={onChange}
                      className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></textarea>
        </React.Fragment>
    );
};

export default Textarea;