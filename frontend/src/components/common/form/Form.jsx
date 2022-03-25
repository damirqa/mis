import {Component} from 'react';
import Joi from "joi";

class Form extends Component {
    state = {
        data: {},
        errors: []
    }

    schema = Joi.object()

    handleChange = e => {
        const data = this.state.data
        data[e.target.id] = e.target.value
        this.setState({data})
    }

    validate = () => {
        const { error } = this.schema.validate(this.state.data, {abortEarly: false})

        if (!error ) return [];

        const errorList = [];
        error.details.forEach((value, index) => {
            errorList[index + 1] = value.message
        })

        return errorList;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errorList = this.validate()
        this.setState({errors: errorList})

        if (errorList.length > 0) return;

        this.doSubmit()

    }
}

export default Form;