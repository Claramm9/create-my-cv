/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import './styles.css';
import { isEmpty, isValidDate } from './validator';

const uuid = require('uuid/v4');

class FormModal extends Component {
  
  static propTypes = {
    fields: PropTypes.array.isRequired,
    info: PropTypes.instanceOf(Map),
    isEditing: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      fields: props.info ? props.info.toObject() : {},
      errors: {}
    };
  }

  validateForm = (data) => {
    const { fields } = this.props;
    const errors = {};

    let formIsValid = true;

    fields.map(field => {
      if (field.name !== 'description') {
        if (isEmpty(data[field.name])) {
          errors[field.name] = '*This field can not be empty.';
          formIsValid = false;
        }
      }
      if (field.name === 'startDate' || field.name === 'endDate') {
        if (!isValidDate(data[field.name])) {
          errors[field.name] = '*Please enter a valid format.';
          formIsValid = false;
        }
      }
    });

    this.setState({
      errors
    });
    return formIsValid;
  }

  handleChange = (e) => {
    const { fields } = this.state;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  handleClick = (e) => {
    e.preventDefault();

    const { fields } = this.state;

    if (!this.props.isEditing) {
      
      fields.id = uuid();
      this.setState({
        fields
      });
    }

    if (this.validateForm(fields)) {
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
          <div key={ field.id }>
            <label>
              {field.label}
            </label>

            {field.component === 'input'
              ? <div className="personal-field">
                <input
                  className="modal-input"
                  type={ field.type }
                  name={ field.name }
                  placeholder={ field.placeholder }
                  onChange={ this.handleChange }
                  value={ this.state.fields[field.name] }
                >
                </input>
                <span className="validation">{this.state.errors[field.name]}</span>
              </div>
              : <div className="personal-field">
                <textarea
                  rows="5"
                  id="textarea"
                  type={ field.type }
                  name={ field.name }
                  placeholder={ field.placeholder }
                  onChange={ this.handleChange }
                  value={ this.state.fields[field.name] }
                >
                </textarea>
                <span className="validation">{this.state.errors[field.name]}</span>
              </div>
            }
          </div>
        ))}
        <div><input id="save" type="submit" value="Save"
          onClick={ this.handleClick } /></div>
      </form>
    );
  }
}

export default FormModal;