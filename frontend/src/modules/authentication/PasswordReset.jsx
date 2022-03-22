import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Input from "../../components/common/fields/Input";
import CentralPlace from "../../components/CentralPlace";

const PasswordReset = () => {
    const [data, setData] = useState({password: '', repeat_password: ''});

    const handleChange = e => {
        setData({...data, [e.target.id]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <CentralPlace>
            <div className='bg-white text-lg font-medium p-10 mb-10 w-full max-w-md'>
                <div className='pb-9 text-center'>
                    <h1 className='text-4xl font-bold'>Password Reset</h1>
                </div>
                <form>
                    <div className="mb-6">
                        <Input name='password' type='password' label='Password' data={data} required={true} onChange={handleChange}/>
                    </div>
                    <div className="mb-6">
                        <Input name='repeat_password' type='password' label='Repeat Password' data={data} required={true} onChange={handleChange}/>
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full px-5 py-2.5 text-center">Submit
                    </button>
                </form>
            </div>
        </CentralPlace>
    );
};

export default PasswordReset;