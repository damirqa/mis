import React from 'react';

const TaskList = ({tasks}) => {

    return (
        <div>
            {tasks.map(task => (
                <div
                    className='bg-white rounded p-2 my-1 hover:bg-gray-200 cursor-pointer'
                    key={task.id}>
                    {task.title}
                </div>
            ))}
        </div>
    );
};

export default TaskList;