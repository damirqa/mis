import React from 'react';
import Joi from "joi";
import {Link} from "react-router-dom";
import Form from "../../components/common/form/Form";
import Input from "../../components/common/fields/Input";
import Alert from "../../components/common/alert/Alert";
import SendButton from "../../components/common/button/SendButton";
import AuthService from "../../services/AuthService";
import CentralPlace from "../../components/CentralPlace";
import InputWithLink from "../../components/common/fields/InputWithLink";

class Authentication extends Form {

    state = {
        data: {login: "", password: ""},
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
    })

    async doSubmit() {
        const {data} = this.state
        this.setState({loading: true})
        const response = AuthService.login(data.login, data.password)
        response.then(result => {
            this.setState({response: result.data, loading: false})

            if (result.data.status === 'success') {
                localStorage.setItem('token', result.data.token)
                setTimeout(() => window.location.href = '/', 2000)
            }
        })
    }

    render() {
        const {data, errors, response, loading} = this.state

        return (
            <CentralPlace>
                <div className='bg-white text-lg font-medium p-10 mb-10 w-full max-w-md'>
                    <div className='pb-9 text-center'>
                        <h1 className='text-4xl font-bold'>Sign in to Shaniyazov</h1>
                        <div>Don't have an account? <Link to='/register' className='text-blue-600 hover:underline'>Register here</Link></div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-6">
                            <Input name='login' label='Login' data={data} onChange={this.handleChange}/>
                        </div>
                        <div className="mb-6">
                            <InputWithLink name='password' type='password' label='Password' data={data} link='/forgot-password' textLink='Forgot password?' onChange={this.handleChange}/>
                        </div>
                        <SendButton loading={loading}/>
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
    }
}

export default Authentication;