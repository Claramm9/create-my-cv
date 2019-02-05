import { Map } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './styles.css';
import { addInfo } from '../../actions/index';
import {
  isEmpty, isEmailValid, isValidName, isValidDate, isValidNumber 
} from '../../components/FormModal/validator';
import InformationForm from './components/InformationForm/index.jsx';

class InformationComponent extends Component {

  static propTypes = {
    info: PropTypes.instanceOf(Map),
    addInfo: PropTypes.func.isRequired,
    isCompleted: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      fields: props.info ? props.info.toObject() : { id: 1 },
      errors: {}
    };
    
  }

  validateForm = () => {
    const { fields } = this.state;
    const errors = {};
    let formIsValid = true;

    if (isEmpty(fields.name)) {
      formIsValid = false;
      errors.name = '*Please enter your name.';
    }

    if (isEmpty(fields.lastName)) {
      formIsValid = false;
      errors.lastName = '*Please enter your last name.';
    }

    if (typeof fields.name !== 'undefined') {
      if (!isValidName(fields.name)) {
        formIsValid = false;
        errors.name = '*Please enter alphabet characters only.';
      }
    }
    if (typeof fields.lastName !== 'undefined') {
      if (!isValidName(fields.lastName)) {
        formIsValid = false;
        errors.lastName = '*Please enter alphabet characters only.';
      }
    }

    if (isEmpty(fields.email)) {
      formIsValid = false;
      errors.email = '*Please enter your email.';
    }

    if (typeof fields.email !== 'undefined') {
      if (!isEmailValid(fields.email)) {
        formIsValid = false;
        errors.email = '*Please enter valid email.';
      }
    }

    if (isEmpty(fields.number)) {
      formIsValid = false;
      errors.number = '*Please enter your mobile number.';
    }

    if (typeof fields.number !== 'undefined') {
      if (!isValidNumber(fields.number)) {
        formIsValid = false;
        errors.number = '*Please enter valid mobile number.';
      }
    }

    if (isEmpty(fields.address)) {
      formIsValid = false;
      errors.address = '*Please enter your address.';
    }

    if (isEmpty(fields.birthday)) {
      formIsValid = false;
      errors.birthday = '*Please enter your birthday.';
    }

    if (typeof fields.birthday !== 'undefined') {
      if (!isValidDate(fields.birthday)) {
        formIsValid = false;
        errors.birthday = '*Please enter a valid format.';
      }
    }

    if (isEmpty(fields.nationality)) {
      formIsValid = false;
      errors.nationality = '*Please enter your nationality.';
    }

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
    if (this.validateForm()) {
      const info = Map(this.state.fields);
      this.props.addInfo(info);
      this.props.isCompleted('infoCompleted', true);
      alert('Saved!');      
    }
  }

  render() {
    return (
      <>
        <h1>Information</h1>
          <InformationForm 
            state={ this.state } 
            onChange={ this.handleChange }
            onClick={ this.handleClick }
          >
          </InformationForm>
    </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addInfo: info => dispatch(addInfo(info))
  };
}

const mapStateToProps = ({ Cv }) => ({
  info: Cv.get('information')
});

const Information = connect(mapStateToProps, mapDispatchToProps)(InformationComponent);

export default Information;