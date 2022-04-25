import React, {useEffect} from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/UseTypedSelector";
import State from "./State";

const StatePlacement = () => {
    const {fetchStatesProject, setDefaultTaskStatus} = useActions()
    const project = useTypedSelector(state => state.project.projectResponse)
    const states = useTypedSelector(state => state.states.stateResponse)
    const tasks = useTypedSelector(state => state.tasks.taskResponse)

    useEffect(() => {
        if (project || tasks === 'OK') {
            fetchStatesProject(project.id)
            if (tasks === 'OK') setDefaultTaskStatus()
        }
    }, [project, tasks])

    return (
        <div className='m-2 ml-0 flex'>
            {states && states.map(data => {
                return <State key={data.id} data={data}/>
            })}
        </div>
    );
};

export default StatePlacement;