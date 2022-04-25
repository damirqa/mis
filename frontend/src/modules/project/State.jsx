import React, {useEffect, useState} from 'react';
import TaskList from "./TaskList";
import CreateTaskButton from "./CreateTaskButton";
import CreateTaskForm from "./CreateTaskForm";
import {useActions} from "../../hooks/useActions";
import {store} from "../../store";

const State = ({data}) => {
    const [createStatus, setCreateStatus] = useState(false)
    const {createTask} = useActions()
    const user_id = store.getState().auth.authResponse.user.id



    const handleClickCreateTask = () => {
        setCreateStatus(true)
    }

    const handlePressEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            const val = e.currentTarget.value
            setCreateStatus(false)
            createTask({stateId: data.id, title: val, owner: user_id})
        }
    }

    return (
        <div className='inline-block bg-gray-100 m-1 p-3 rounded w-72 h-full'>
            <div className='font-medium'>
                {data.name}
            </div>
            {data.tasks.length ? <TaskList tasks={data.tasks}/> : ''}
            <div>
                {createStatus && <CreateTaskForm onKeyEnterPress={handlePressEnter}/>}
                {!createStatus && <CreateTaskButton onClick={handleClickCreateTask}/>}
            </div>
        </div>
    );
};

export default State;