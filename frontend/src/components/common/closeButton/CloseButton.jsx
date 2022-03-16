import React from 'react';
import CloseIcon from "../icons/CloseIcon";

const CloseButton = ({id}) => {
    return (
        <button type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-collapse-toggle={id} aria-label="Close">
            <span className="sr-only">Close</span>
            <CloseIcon/>
        </button>
    );
};

export default CloseButton;