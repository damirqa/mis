import React from 'react';
import Joi from "joi";
import {Link} from "react-router-dom";
import Form from "../../components/common/form/Form";
import Input from "../../components/common/fields/Input";
import Alert from "../../components/common/alert/Alert";
import SendButton from "../../components/common/button/SendButton";
import AuthService from "../../services/AuthService";
import CentralPlace from "../../components/CentralPlace";

class Registration extends Form {
    state = {
        data: {login: "", password: "", confirm_password: ""},
        response: null,
        errors: [],
        loading: false
    }

    schema = Joi.object({
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

    doSubmit() {
        const {data} = this.state
        this.setState({loading: true})
        const response = AuthService.registration(data.login, data.password, data.confirm_password)

        response.then(result => {
            this.setState({response: result.data, loading: false})
        })
        .catch(error => console.log(error.data))
    }

    render() {
        const {data, errors, response, loading} = this.state

        return (
            <CentralPlace>
                <div className='bg-white text-lg font-medium p-10 mb-10 w-full max-w-md'>
                    <div className='pb-9 text-center'>
                        <h1 className='text-4xl font-bold'>Register for Shaniyazov</h1>
                        <div>All ready have an account? <Link to='/auth/login' className='text-blue-600 hover:underline'>Sign in here</Link></div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-6">
                            <Input name='login' type='text' label='Email Address' data={data} onChange={this.handleChange} />
                        </div>
                        <div className="mb-6">
                            <Input name='password' type='password' label='Password' data={data} onChange={this.handleChange}/>
                        </div>
                        <div className="mb-6">
                            <Input name='confirm_password' type='password' label='Confirm Password' data={data} onChange={this.handleChange} />
                        </div>
                        <SendButton text='Submit' loading={loading}/>
                        {errors.length > 0 && (
                            errors.map((error, index) => <Alert key={index} type='danger' message={`${index}) ${error}`} />)
                        )}
                        {response && (
                            <Alert type={response.status} message={response.message}/>
                        )}
                    </form>
                </div>
            </CentralPlace>
        );
    }
}

export default Registration;