import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './styles.css';
import { isEmpty, isValidDate } from './validator';

class Form extends Component {
    static propTypes = {
        fields: PropTypes.instanceOf(Map),
        info: PropTypes.instanceOf(Map),
        size: PropTypes.number
    }

    constructor(props) {
        super(props);

        const uuid = require('uuid/v4');

        if (typeof (this.props.info) === "undefined") {
            this.state = {
                fields: {
                    id: uuid(),
                    field1: '',
                    field2: '',
                    startDate: '',
                    endDate: '',
                    description: ''
                },
                errors: {
                    field1: '',
                    field2: '',
                    startDate: '',
                    endDate: ''
                }
            }
        } else {
            this.state = {
                fields: {
                    id: this.props.info.get('id'),
                    field1: this.props.info.get('field1'),
                    field2: this.props.info.get('field2'),
                    startDate: this.props.info.get('startDate'),
                    endDate: this.props.info.get('endDate'),
                    description: this.props.info.get('description')
                },
                errors: {
                    field1: '',
                    field2: '',
                    startDate: '',
                    endDate: ''
                }
            }

        }
    }

    validateForm = () => {
        let fields = this.state.fields;
        let errors = {
            field1: '',
            field2: '',
            startDate: '',
            endDate: ''
        };
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
        if (this.validateForm()) {
            const data = Map({
                id: this.state.fields.id,
                field1: this.state.fields.field1,
                field2: this.state.fields.field2,
                startDate: this.state.fields.startDate,
                endDate: this.state.fields.endDate,
                description: this.state.fields.description
            });
            this.setState({
                fields: {
                    id: '',
                    field1: '',
                    field2: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                },
                errors: {
                    field1: '',
                    field2: '',
                    startDate: '',
                    endDate: ''
                }
            });
            this.props.onConfirm(data);
        }
    }

    render() {
        return (
            <form>
                <label className="modal-form">
                    {this.props.fields.get("field1")}:
                    </label>
                <div className="personal-field">
                    <input
                        className="modal-input"
                        type="text"
                        name="field1"
                        onChange={this.handleChange}
                        value={this.state.fields.field1}
                    >
                    </input>
                    <span className="validation">{this.state.errors.field1}</span>
                </div>
                <label className="modal-form">
                    {this.props.fields.get("field2")}:
                </label>
                <div className="personal-field">
                    <input
                        className="modal-input"
                        type="text"
                        name="field2"
                        onChange={this.handleChange}
                        value={this.state.fields.field2}
                    >
                    </input>
                    <span className="validation">{this.state.errors.field2}</span>
                </div>
                <label className="modal-form">
                    {this.props.fields.get("startDate")}:
                </label>
                <div className="personal-field">
                    <input
                        className="modal-input"
                        type="text"
                        name="startDate"
                        placeholder="MM-DD-YYYY"
                        onChange={this.handleChange}
                        value={this.state.fields.startDate}
                    >
                    </input>
                    <span className="validation">{this.state.errors.startDate}</span>
                </div>
                <label className="modal-form">
                    {this.props.fields.get("endDate")}:
                </label>
                <div className="personal-field">
                    <input
                        className="modal-input"
                        type="text"
                        name="endDate"
                        placeholder="MM-DD-YYYY"
                        onChange={this.handleChange}
                        value={this.state.fields.endDate}
                    >
                    </input>
                    <span className="validation">{this.state.errors.endDate}</span>
                </div>
                <label className="modal-form">
                    {this.props.fields.get("description")}:
                </label>
                <textarea
                    rows="5"
                    id="description"
                    type="text"
                    name="description"
                    onChange={this.handleChange}
                    value={this.state.fields.description}
                >
                </textarea>
                <div><input id="save" type="submit" value="Save" onClick={this.handleClick} /></div>
            </form >
        )
    }
}

export default Form;