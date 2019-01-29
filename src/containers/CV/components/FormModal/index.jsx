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

    validateForm = (data) => {
        let fields = this.props.fields;
        let errors = {};

        let formIsValid = true;

        fields.map(field => {
            if (field.name !== 'description') {
                if (isEmpty(data[field.name])) {
                    errors[field.name] = "*This field can not be empty.";
                    formIsValid = false;
                }
            }
            if (field.name === 'startDate' || field.name === 'endDate') {
                if (!isValidDate(data[field.name])) {
                    errors[field.name] = "*Please enter a valid format.";
                    formIsValid = false;
                }
            }
        });

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
            const uuid = require('uuid/v4');
            fields = this.state.fields;
            fields.id = uuid();
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
        if (this.validateForm(fields)) {
            const data = Map(fields);
            // let emptyFields = {}
            // this.props.fields.map(field => (
            //     emptyFields[field.name] = ''
            // ))
            // console.log(emptyFields)
            // this.setState({
            //     fields: emptyFields,
            //     errors: {}
            // })
            this.setState({
                fields: {},
                errors: {}
            })
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