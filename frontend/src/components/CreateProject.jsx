import React from 'react';
import HiddenInput from "./common/fields/HiddenInput";
import Input from "./common/fields/Input";
import Textarea from "./common/fields/Textarea";
import Select from "./common/fields/Select";
import Alert from "./common/alert/Alert";
import Form from "./common/form/Form";
import ProjectService from "../services/ProjectService";

class CreateProject extends Form {

    state = {
        data: {name: '', type: '', description: '', owner: ''},
        projectTypes: [],
        response: null,
        errors: []
    }

    componentDidMount() {

    }

    async doSubmit() {
        const response = await ProjectService.createProject(this.state.data)
        if (response.data.status === 'success') {
            const project = response.data.project // TODO
            delete response.data.project
        }
        this.setState({response: response.data})
    }


    render() {
        const {data, projectTypes, errors, response} = this.state

        return (
            <div className='p-5'>
                <form onSubmit={this.handleSubmit}>
                    <HiddenInput name='owner' data={data}/>

                    <div className='mb-5'>
                        <Input name='name' label='Name'  data={data} onChange={this.handleChange}/>
                    </div>

                    <div className='mb-5'>
                        <Select name='type' label='Type' data={projectTypes} onChange={this.handleChange}/>
                    </div>

                    <div className='mb-5'>
                        <Textarea name='description' label='Description' data={data} onChange={this.handleChange}/>
                    </div>

                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full px-5 py-2.5 text-center">Submit
                    </button>
                </form>
                {errors.length > 0 && (
                    errors.map((error, index) => <Alert key={index} type='danger' message={`${index}) ${error}`} />)
                )}
                {response && (
                    <Alert type={response.status} message={response.message}/>
                )}
            </div>
        );
    }
}

export default CreateProject;