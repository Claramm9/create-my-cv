import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './styles.css';
import { isEmpty } from './validator';

class Form extends Component {
    static propTypes = {
        fields: PropTypes.instanceOf(Map),
        info: PropTypes.instanceOf(Map)
    }

    constructor(props) {
        super(props);

        const uuid = require('uuid/v4');

        if (typeof(this.props.info) === "undefined") {
            this.state = {
                fields: {
                    id: uuid(),
                    field1: '',
                    field2: ''
                },
                errors: {
                    field1: '',
                    field2: ''
                }
            }
        }else {
            this.state = {
                fields: {
                    id: this.props.info.get('id'),
                    field1: this.props.info.get('field1'),
                    field2: this.props.info.get('field2')
                },
                errors: {
                    field1: '',
                    field2: ''
                }
            }

        }
    }

        validateForm = () => {
            let fields = this.state.fields;
            let errors = {
                field1: '',
                field2: ''
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

            this.setState({
                errors
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
                    field2: this.state.fields.field2
                });
                this.setState({
                    fields: {
                        id: '',
                        field1: '',
                        field2: ''
                    },
                    errors: {
                        field1: '',
                        field2: ''
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
                    <textarea
                        rows="5"
                        id="description"
                        type="text"
                        name="field2"
                        onChange={this.handleChange}
                        value={this.state.fields.field2}
                    >
                    </textarea>
                    <div><input id="save" type="submit" value="Save" onClick={this.handleClick} /></div>
                </form >
            )
        }
    }

    export default Form;