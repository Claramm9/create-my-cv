import { Map } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './styles.css';
import { addInfo } from '../../actions/index';
import { validateForm } from '../../services/validation/validateForm';
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
      const info = Map(this.state.fields);
      this.props.addInfo(info);
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