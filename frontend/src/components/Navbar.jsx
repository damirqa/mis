import React from 'react';
import Modal from "./Modal";

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-white font-medium border-b-2'>
            <div className='text-2xl p-2'>
                Shaniyazov
            </div>
            <div>
                <ul className='flex flex-row p-2'>
                    <li className='px-2'><a href='/' className='hover:text-blue-700 cursor-pointer'>Your work</a></li>
                    <li className='px-2'><a href='/' className='hover:text-blue-700 cursor-pointer'>Projects</a></li>
                    <li className='px-2'><a href='/' className='hover:text-blue-700 cursor-pointer'>People</a></li>
                    <li className='px-2'><a href='/' className='hover:text-blue-700 cursor-pointer'>Plans</a></li>
                </ul>
            </div>
            <div className='p-2'>
                <button type="button" data-modal-toggle="authentication-modal"
                        className="text-white bg-blue-700 py-2 px-4 rounded-md font-medium">
                    Create
                </button>
                <Modal id='authentication-modal'/>
            </div>
        </nav>
    );
};

export default Navbar;