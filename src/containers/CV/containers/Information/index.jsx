import { Record } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './styles.css';
import { addInfo } from '../../actions/index';
import { InformationModel } from '../../models/InformationModel';
import InformationForm from './components/InformationForm/index.jsx';
import { validateForm } from '../../services/validation/validateForm';

class InformationComponent extends Component {

  static propTypes = {
    info: PropTypes.instanceOf(Record),
    addInfo: PropTypes.func.isRequired,
    isCompleted: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      fields: props.info ? props.info.toObject() : {},
      errors: {}
    };
    
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
    const data = validateForm(this.state.fields);
    if (data.isFormValid) {
      this.props.addInfo(new InformationModel(this.state.fields));
      this.props.isCompleted('infoCompleted', true);
      alert('Saved!');      
    } else {
      this.setState({ errors: data.errors });
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

const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info))
});

const mapStateToProps = ({ Cv }) => ({
  info: Cv.get('information')
});

const Information = connect(mapStateToProps, mapDispatchToProps)(InformationComponent);

export default Information;