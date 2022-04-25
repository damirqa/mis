import React from 'react';
import {PlusIcon} from "@heroicons/react/solid";

const CreateTaskButton = ({onClick}) => {
    return (
        <button className='mt-3 hover:bg-gray-200 w-full rounded p-2 text-left' onClick={onClick}>
            <PlusIcon className='w-5 h-5 mb-1 mr-1 inline-block'/>
            Create task
        </button>
    );
};

export default CreateTaskButton;