import React, {useEffect, useState} from 'react';
import CreateProject from "../CreateProject";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/UseTypedSelector";
import {useNavigate} from 'react-router-dom'

const CreateProjectWrapper = () => {
    const {createProject} = useActions()
    const auth = useTypedSelector(state => state.auth.authResponse)
    const navigate = useNavigate()

    const [owner, setOwner] = useState('')

    useEffect(() => {
        setOwner(auth?.user.id)
    }, [auth])

    return (
        <CreateProject create={createProject} owner={owner} navigate={navigate}/>
    );
};

export default CreateProjectWrapper;