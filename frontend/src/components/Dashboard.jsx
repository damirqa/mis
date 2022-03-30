import React from 'react';
import AsideBar from "./asideBar/AsideBar";
import {BrowserRouter, Routes} from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
    return (
        <BrowserRouter>
            <Navbar/>

            <div className='flex'>
                <AsideBar/>
                <div className='w-full'>

                </div>
            </div>

            <Routes>

            </Routes>
        </BrowserRouter>
    );
};

export default Dashboard;

// <React.Fragment>
//     <div className='flex'>
//         <AsideBar/>
//         <div className='w-full'>
//
//         </div>
//     </div>
// </React.Fragment>