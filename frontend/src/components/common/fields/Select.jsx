import React from 'react';

const Select = ({name, label, data, onChange}) => {
    const options = data.map(item => <option key={item.name} value={item.id}>{item.name}</option>)

    return (
        <React.Fragment>
            <label htmlFor={name}
                   className="block mb-1 text-gray-900 dark:text-gray-300">{label}</label>
            <select id={name} defaultValue="" onChange={onChange}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                <option disabled value="">Choose item...</option>
                {options}
            </select>
        </React.Fragment>
    );
};

export default Select;