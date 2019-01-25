import React, { Component } from 'react';
import { Map } from 'immutable';

import './styles.css';

class FormModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};

        let formIsValid = true;

        if (isEmpty(fields.field1)) {
            formIsValid = false;
            errors.field1 = "*This field can not be empty.";
        }

        if (isEmpty(fields.field2)) {
            formIsValid = false;
            errors.field2 = "*This field can not be empty.";
        }

        if (isEmpty(fields.startDate)) {
            formIsValid = false;
            errors.startDate = "*This field can not be empty.";
        }

        if (typeof fields.startDate !== "undefined") {
            if (!isValidDate(fields.startDate)) {
                formIsValid = false;
                errors.startDate = "*Please enter a valid format.";
            }
        }

        if (isEmpty(fields.endDate)) {
            formIsValid = false;
            errors.endDate = "*This field can not be empty.";
        }

        if (typeof fields.endDate !== "undefined") {
            if (!isValidDate(fields.endDate)) {
                formIsValid = false;
                errors.endDate = "*Please enter a valid format.";
            }
        }
        this.setState({
            errors: errors
        });
        return formIsValid;
    }
    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    handleClick = (e) => {
        e.preventDefault();

        //if (this.validateForm()) {
        const data = Map(this.state.fields);
        debugger
        this.setState({
            fields: {},
            errors: {}
        });
        this.props.onConfirm(data);
        //}
    }

    render() {
        return (
            <form>
                {this.props.fields.map(field => (
                    <div key={field.id}>
                        <label>
                            {field.label}
                        </label>

                        {field.component === "input" ?
                            <div className="personal-field">
                                <input
                                    className="modal-input"
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    onChange={this.handleChange}
                                    value={this.state.fields[field.name]}
                                >
                                </input>
                                <span className="validation">{this.state.errors[field.name]}</span>
                            </div>
                            :
                            <div className="personal-field">
                                <textarea
                                    rows="5"
                                    id="textarea"
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    onChange={this.handleChange}
                                    value={this.state.fields[field.name]}
                                >
                                </textarea>
                                <span className="validation">{this.state.errors[field.name]}</span>
                            </div>
                        }
                    </div>
                ))}
                <div><input id="save" type="submit" value="Save" onClick={this.handleClick} /></div>
            </form>
        )
    }
}

export default FormModal;