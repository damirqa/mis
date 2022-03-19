import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Input from "../../components/common/fields/Input";

const Registration = () => {
    const [data, setData] = useState({login: '', password: '', confirm_password: ''});

    const handleChange = e => {
        setData({...data, [e.target.id]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='flex flex-row min-h-screen items-center justify-center bg-blue-50'>
            <div className='bg-white text-lg font-medium p-10 mb-10 w-full max-w-md'>
                <div className='pb-9 text-center'>
                    <h1 className='text-4xl font-bold'>Register for Shaniyazov</h1>
                    <div>All ready have an account? <Link to='/login' className='text-blue-600 hover:underline'>Sign in here</Link></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <Input name='login' type='email' label='Email Address' data={data} required={true} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <Input name='password' type='password' label='Password' data={data} required={true} onChange={handleChange}/>
                    </div>
                    <div className="mb-6">
                        <Input name='confirm_password' type='password' label='Confirm Password' data={data} required={true} onChange={handleChange} />
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full px-5 py-2.5 text-center">Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;