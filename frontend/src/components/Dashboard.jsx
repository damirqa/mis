import React from 'react';
import Navbar from "./Navbar";
import AsideBar from "./asideBar/AsideBar";

const Dashboard = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <div className='flex'>
                <AsideBar/>
                <div className='w-full'>

                </div>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;