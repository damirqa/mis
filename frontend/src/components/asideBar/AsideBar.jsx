import React from 'react';

const AsideBar = () => {
    return (
        <aside className='flex flex-col justify-between text-gray-500 font-medium min-h-screen w-64 border-r-2 pt-4'>
            <ul>
                <li className='flex bg-blue-100 p-2 mx-5 rounded-md text-blue-600'>
                    <a href='/'>Kanban</a>
                </li>
                <li className='flex p-2 mx-5'>
                    <a href='/'>Board</a>
                </li>
                <li className='flex p-2 mx-5'>
                    <a href='/'>Reports</a>
                </li>
            </ul>
            <ul>
                <li>Settings</li>
            </ul>
        </aside>
    );
};

export default AsideBar;