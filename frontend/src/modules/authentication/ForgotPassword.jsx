import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Input from "../../components/common/fields/Input";
import InputWithLink from "../../components/common/fields/InputWithLink";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log(1)
    }

    return (
        <div className='flex flex-row min-h-screen items-center justify-center bg-blue-50'>
            <div className='bg-white text-lg font-medium p-10 mb-10 w-full max-w-md'>
                <div className='pb-9 text-center'>
                    <h1 className='text-4xl font-bold'>Forgot password?</h1>
                    <div>Changed your mind? <Link to='/login' className='text-blue-600 hover:underline'>Sign in here</Link></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <Input name='email' label='Email Address' data={email} required={true} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full px-5 py-2.5 text-center">Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;