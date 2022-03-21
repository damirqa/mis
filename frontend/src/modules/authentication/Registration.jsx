import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Joi from 'joi'
import AuthService from "../../services/AuthService";
import Input from "../../components/common/fields/Input";
import Alert from "../../components/common/alert/Alert";

const Registration = () => {
    const [data, setData] = useState({login: '', password: '', confirm_password: ''});
    const [errors, setErrors] = useState([]);
    const [response, setResponse] = useState();
    const navigate = useNavigate();

    const schema = Joi.object({
        login: Joi.string()
            .email({tlds:{allow: false}})
            .messages({
                "string.email": "Incorrect mail"
            }),

        password: Joi.string()
            .min(8)
            .required()
            .messages({
                "string.min": "Password is too short (min {{#limit}})"
            }),

        confirm_password: Joi.string()
            .required()
            .equal(Joi.ref('password'))
            .messages({
                "any.only": "Password does not match",
            })
    })

    const handleChange = e => {
        setData({...data, [e.target.id]: e.target.value })
    }

    const validate = () => {
        const { error } = schema.validate(data, {abortEarly: false})

        if (!error ) return [];

        const errorList = [];
        error.details.forEach((value, index) => {
            errorList[index + 1] = value.message
        })

        return errorList;
    }

    const handleSubmit = e => {
        e.preventDefault();

        const errorList = validate()
        setErrors(errorList)

        if (errorList.length > 0) return;

        const response = AuthService.registration(data.login, data.password, data.confirm_password)

        response.then(result => {
            setResponse(result.data)
        })
        .catch(error => console.log(error.data))
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
                        <Input name='login' type='text' label='Email Address' data={data} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <Input name='password' type='password' label='Password' data={data} onChange={handleChange}/>
                    </div>
                    <div className="mb-6">
                        <Input name='confirm_password' type='password' label='Confirm Password' data={data} onChange={handleChange} />
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full px-5 py-2.5 text-center">Submit
                    </button>
                    {errors.length > 0 && (
                        errors.map((error, index) => <Alert type='danger' message={`${index}) ${error}`} />)
                    )}
                    {response && (
                        <Alert type={response.status} message={response.message}/>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Registration;