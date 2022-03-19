import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Input from "../../components/common/fields/Input";
import InputWithLink from "../../components/common/fields/InputWithLink";



const Authentication = () => {
    const [data, setData] = useState({login: '', password: ''});

    const handleChange = e => {
        setData({...data, [e.target.id]: e.target.value })
    }

    const handleSubmit = () => {
        console.log(1)
    }

    return (
        <div className='flex flex-row min-h-screen items-center justify-center bg-blue-50'>
            <div className='bg-white text-lg font-medium p-10 mb-10 w-full max-w-md'>
                <div className='pb-9 text-center'>
                    <h1 className='text-4xl font-bold'>Sign in to Shaniyazov</h1>
                    <div>Don't have an account? <Link to='/register' className='text-blue-600 hover:underline'>Register here</Link></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <Input name='login' label='Login' data={data} required={true} onChange={handleChange}/>
                    </div>
                    <div className="mb-6">
                        <InputWithLink name='password' type='password' label='Password' data={data} required={true} link='/forgot-password' textLink='Forgot password?' onChange={handleChange}/>
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