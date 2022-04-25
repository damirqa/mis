import React, {useEffect, useLayoutEffect, useState} from 'react';
import Board from "./Board";
import NavbarProject from "../../components/NavbarProject";
import {Route, Routes} from "react-router-dom";
import RoadMap from "../../components/RoadMap";
import {useActions} from "../../hooks/useActions";
import {store} from "../../store";
import CreateProjectWrapper from "../../components/wrappers/CreateProjectWrapper";
import {useTypedSelector} from "../../hooks/UseTypedSelector";

const Project = () => {

    const {fetchLastProject} = useActions()
    const [projectExist, setProjectExist] = useState(false)
    const user = store.getState().auth.authResponse?.user

    useEffect(() => {
        const checkProject = async () => {
            if (user) {
                await fetchLastProject(user)

                let project = store.getState().project.projectResponse
                project?.id ? setProjectExist(true) : setProjectExist(false)
            }
        }

        checkProject()
    }, [user, fetchLastProject])

    return (
        <React.Fragment>
            <div className='flex flex-row'>
                <div className='basis-1/6 '>
                    <NavbarProject/>
                </div>
                <div className='basis-5/6'>
                    {!projectExist && (
                        <CreateProjectWrapper />
                    )}
                    <Routes>
                        <Route path='road-map' element={<RoadMap/>}/>
                        <Route path='board' element={<Board/>}/>
                    </Routes>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;