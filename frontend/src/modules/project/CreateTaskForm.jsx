import React from 'react';

const CreateTaskForm = ({onKeyEnterPress}) => {
    return (
        <form className='pt-3'>
            <textarea onKeyPress={(e) => onKeyEnterPress(e)} type='text' className='border rounded text-sm w-full overflow-y-visible' autoFocus={true}></textarea>
        </form>
    );
};

export default CreateTaskForm;