import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Joi from "joi";
import Input from "../../components/common/fields/Input";
import InputWithLink from "../../components/common/fields/InputWithLink";
import AuthService from "../../services/AuthService";
import Alert from "../../components/common/alert/Alert";
import CentralPlace from "../../components/CentralPlace";

const Authentication = () => {
    const [data, setData] = useState({login: '', password: ''});
    const [response, setResponse] = useState();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()

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

        const response = AuthService.login(data.login, data.password)
        response.then(result => {
            setResponse(result.data)
            if (result.data.status === 'success') {
                localStorage.setItem('token', result.data.token)
                navigate('/')
            }
        })

    }

    return (
        <CentralPlace>
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
                    {errors.length > 0 && (
                        errors.map((error, index) => <Alert type='danger' message={`${index}) ${error}`} />)
                    )}
                    {response && (
                        <Alert type={response.status} message={response.message}/>
                    )}
                </form>
            </div>
        </CentralPlace>
    );
};

export default Authentication;