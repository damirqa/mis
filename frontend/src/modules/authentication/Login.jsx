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
import {fetchUsers} from "../../action-creators/user";
import {useActions} from "../../hooks/useActions";
import {store} from "../../store";

class Login extends Form {

    state = {
        data: {email: "", password: ""},
        response: null,
        errors: [],
        loading: false
    }



    schema = Joi.object({
        email: Joi.string()
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
        await this.props.login(data)

        const authState = store.getState().auth
        if (authState.authResponse) this.props.navigate('/forgot-password')

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
                            <Input name='email' label='Email' data={data} onChange={this.handleChange}/>
                        </div>
                        <div className="mb-6">
                            <InputWithLink name='password' type='password' label='Password' data={data} link='/forgot-password' textLink='Forgot password?' onChange={this.handleChange}/>
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

export default Login;