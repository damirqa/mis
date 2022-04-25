import React from 'react';
import {Link} from 'react-router-dom'
import {ViewBoardsIcon, ChartBarIcon, ArchiveIcon} from '@heroicons/react/solid'

const NavbarProject = () => {
    return (
        <nav>
            <aside className='w-full ' aria-label='Sidebar'>
                <div className='min-h-screen bg-gray-100 py-3 px-3 my-2 mx-2 rounded-md'>
                    <ul className='space-y-2 text-gray-600 border-gray-400 border-b-2 pb-2'>
                        <li>
                            <Link to='#' className='hover:text-blue-700 cursor-pointer'>
                                <span className='align-text-bottom'><ArchiveIcon className='w-5 h-5 inline mr-1'/></span>
                                <span>Current Project</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className='space-y-2 text-gray-600 pt-2'>
                        <li>
                            <Link to='road-map' className='hover:text-blue-700 cursor-pointer'>
                                <span className='align-text-bottom'><ChartBarIcon className='w-5 h-5 inline mr-1'/></span>
                                <span>Road map</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='board' className='hover:text-blue-700 cursor-pointer'>
                                <span className='align-text-bottom'><ViewBoardsIcon className='w-5 h-5 inline mr-1'/></span>
                                <span>Board</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </nav>
    );
};

export default NavbarProject;