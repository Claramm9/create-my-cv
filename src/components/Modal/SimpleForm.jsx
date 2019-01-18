import { Map } from 'immutable';
import React, { Component } from 'react';

import './styles.css';
import { isEmpty } from './validator';

class SimpleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            field: '',
            error: ''
        };
    }

    validateForm = () => {
        let error = '';
        let formIsValid = true;

        if (isEmpty(this.state.field)) {
            formIsValid = false;
            error = "*This field can not be empty.";
        }
        this.setState({
            error: error
        });
        return formIsValid;
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = (e) => {
        e.preventDefault();

        if (this.validateForm()) {
            const data = Map({
                field: this.state.field
            });
            this.setState({
                field: '',
                error: ''
            })
            this.props.onConfirm(data)
        }
    }
    render() {

        return (
            <form>
                <textarea
                    rows="5"
                    id="description"
                    type="text"
                    name="field"
                    onChange={this.handleChange}
                    value={this.state.description}
                >
                </textarea>
                <div><input id="save" type="submit" value="Save" onClick={this.handleClick} /></div>
            </form >
        )
    }
}

export default SimpleForm;