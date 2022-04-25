import React, {useLayoutEffect} from 'react';
import {BrowserRouter, Routes, Route, useNavigate, Navigate} from "react-router-dom";
import Navbar from "./Navbar";
import Project from "../modules/project/Project";
import NotAuthorized from "./NotAuthorized";

const Dashboard = ({auth}) => {

    return (
        auth ? (
            <div>
                <Navbar/>
                <div className=''>
                    <Routes>
                        <Route path='jobs' element={<Project />} />
                        <Route path='projects/*' element={<Project />} />
                    </Routes>
                </div>
            </div>
        ) : (
            <NotAuthorized/>
        )
    )
};

export default Dashboard;
