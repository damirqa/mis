import React from 'react';
import {Link} from "react-router-dom";

const Authentication = () => {
    return (
        <div className='flex flex-row min-h-screen items-center justify-center bg-blue-50'>
            <div className='bg-white text-lg font-medium p-10 mb-10 w-full max-w-md'>
                <div className='pb-9 text-center'>
                    <h1 className='text-4xl font-bold'>Sign in to Shaniyazov</h1>
                    <div>Don't have an account? <Link to='/' className='text-blue-600 hover:underline'>Register here</Link></div>
                </div>
                <form>
                    <div className="mb-6">
                        <label htmlFor="email"
                               className="block mb-1 text-gray-900 dark:text-gray-300">Email Address</label>
                        <input type="email" id="email"
                               className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required/>
                    </div>
                    <div className="mb-6">
                        <div className='flex justify-between'>
                            <label htmlFor="password"
                                   className="block mb-1 text-gray-900 dark:text-gray-300">Password</label>
                            <Link className='text-blue-600 hover:underline' to='/'>Forgot password?</Link>
                        </div>
                        <input type="password" id="password"
                               className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required/>
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full px-5 py-2.5 text-center">Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Authentication;