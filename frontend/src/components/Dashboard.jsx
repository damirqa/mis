import React from 'react';
import AsideBar from "./asideBar/AsideBar";

const Dashboard = ({projects}) => {
    return (
        <React.Fragment>
            <div className='flex'>
                <AsideBar/>
                <div className='w-full'>

                </div>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;