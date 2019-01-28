import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import './styles.css';
import { isEmpty, isValidDate } from './validator';

class FormModal extends Component {
    static propTypes = {
        fields: PropTypes.array.isRequired,
        info: PropTypes.instanceOf(Map),
        isEditing: PropTypes.bool.isRequired
    }
    constructor(props) {
        super(props);

        if (this.props.isEditing) {
            this.state = {
                fields: this.props.info.toObject(),
                errors: {}
            }
        } else {
            this.state = {
                fields: {},
                errors: {}
            }
        }
    }

    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};

        console.log(fields)
        let formIsValid = true;

        for (field in fields){
            if (isEmpty(field)) {
                errors[field] = "*This field can not be empty.";
                formIsValid = false;
            }
            if(field === 'startDate' || field === 'endDate') {
                if (!isValidDate(field)) {
                    errors[field] = "*Please enter a valid format.";
                    formIsValid = false;
                }
            }
        }
        // fields.map(field => (
        //     (isEmpty(field) ?
        //         errors[field] = "*This field can not be empty."
        //         :
        //         errors[field] = '')

        //         (field === 'startDate' || field === 'endDate' ?
        //             isValidDate(field) ?
        //                 errors[field] = ''
        //                 :
        //                 errors[field] = "*Please enter a valid format."
        //             :
        //             '')
        // ));

        // if (isEmpty(fields.field1)) {
        //     formIsValid = false;
        //     errors.field1 = "*This field can not be empty.";
        // }

        // if (isEmpty(fields.field2)) {
        //     formIsValid = false;
        //     errors.field2 = "*This field can not be empty.";
        // }

        // if (isEmpty(fields.startDate)) {
        //     formIsValid = false;
        //     errors.startDate = "*This field can not be empty.";
        // }

        // if (typeof fields.startDate !== "undefined") {
        //     if (!isValidDate(fields.startDate)) {
        //         formIsValid = false;
        //         errors.startDate = "*Please enter a valid format.";
        //     }
        // }

        // if (isEmpty(fields.endDate)) {
        //     formIsValid = false;
        //     errors.endDate = "*This field can not be empty.";
        // }

        // if (typeof fields.endDate !== "undefined") {
        //     if (!isValidDate(fields.endDate)) {
        //         formIsValid = false;
        //         errors.endDate = "*Please enter a valid format.";
        //     }
        // }
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
        let fields = {};
        if (!this.props.isEditing) {
            const uuid2 = require('uuid/v4');
            fields = this.state.fields;
            fields.id = uuid2();
            this.setState({
                fields
            });
        } else {

            this.props.fields.map(field => (
                typeof (this.state.fields[field.name]) === 'undefined' ?
                    fields[field.name] = this.props.info.get(field.name)
                    :
                    fields[field.name] = this.state.fields[field.name]
            ))
            fields.id = this.props.info.get('id');
            this.setState({
                fields
            });
        }
        if (this.validateForm()) {
            const data = Map(fields);
            this.setState({
                fields: {},
                errors: {}
            });

            this.props.onConfirm(data);
        }
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