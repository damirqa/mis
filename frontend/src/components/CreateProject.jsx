import React, {useEffect, useState} from 'react';
import axios from "axios";
import Joi from "joi";
import config from '../config.json'
import AuthService from '../services/AuthService'
import Input from './common/fields/Input'
import Select from "./common/fields/Select";
import Textarea from "./common/fields/Textarea";
import HiddenInput from "./common/fields/HiddenInput";
import Alert from "./common/alert/Alert";
import ProjectService from "../services/ProjectService";

const CreateProject = () => {
    const [data, setData] = useState({name: '', type: '', description: '', owner: ''})
    const [errors, setErrors] = useState([]);
    const [response, setResponse] = useState();
    const [projectTypes, setProjectTypes] = useState([])

    const schema = Joi.object({
        name: Joi.string().required().empty('').messages({"any.required": "Name must be fill in"}),
        type: Joi.number().required().empty('').messages({"any.required": "Type must be fill in"}),
        owner: Joi.number().required().empty('').messages({"any.required": "Owner must be fill in"}),
        description: Joi.string().empty('')
    })

    useEffect( async () => {
        const pt = await axios.post(config.api_url + '/project-types')
        setProjectTypes(pt.data)

        const owner = AuthService.getCurrentUser().id

        const project = data
        project.owner = owner
        setData(project)
    }, [])

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

    const handleSubmit = async e => {
        e.preventDefault();

        const errorList = validate()
        setErrors(errorList)

        if (errorList.length > 0) return;

        const response = await ProjectService.createProject(data)
        if (response.data.status === 'success') {
            const project = response.data.project
            delete response.data.project
        }
        setResponse(response.data)
    }

    return (
        <div className='p-5'>
            <form onSubmit={handleSubmit}>
                <HiddenInput name='owner' data={data}/>

                <div className='mb-5'>
                    <Input name='name' label='Name'  data={data} onChange={handleChange}/>
                </div>

                <div className='mb-5'>
                    <Select name='type' label='Type' data={projectTypes} onChange={handleChange}/>
                </div>

                <div className='mb-5'>
                    <Textarea name='description' label='Description' data={data} onChange={handleChange}/>
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
};

export default CreateProject;