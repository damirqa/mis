import React from 'react';
import Joi from "joi";
import Form from "../../components/common/form/Form";
import Input from "../../components/common/fields/Input";
import SendButton from "../../components/common/button/SendButton";
import CentralPlace from "../../components/CentralPlace";

class PasswordReset extends Form {
    state = {
        data: {password: "", repeat_password: ""},
        response: null, //TODO check for necessity
        errors: [], //TODO check for necessity
        loading: false
    }

    schema = Joi.object() //TODO

    doSubmit() {
        //TODO
    }

    render() {
        const {data, loading} = this.state

        return (
            <CentralPlace>
                <div className='bg-white text-lg font-medium p-10 mb-10 w-full max-w-md'>
                    <div className='pb-9 text-center'>
                        <h1 className='text-4xl font-bold'>Password Reset</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-6">
                            <Input name='password' type='password' label='Password' data={data} onChange={this.handleChange}/>
                        </div>
                        <div className="mb-6">
                            <Input name='repeat_password' type='password' label='Repeat Password' data={data} onChange={this.handleChange}/>
                        </div>
                        <SendButton text='Submit' loading={loading}/>
                    </form>
                </div>
            </CentralPlace>
        );
    }
}

export default PasswordReset;