import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import './styles.css';
import '../../styles.css';
import { AptitudModel } from '../../models/AptitudModel';
import { isEmpty } from '../../services/validation/validator';
import Display from '../../../../components/Display/index.jsx';
import { addAptitud, deleteAptitud } from '../../actions/index';

const uuid = require('uuid/v4');

class AptitudesComponent extends Component {
  static propTypes = {
    aptitudes: PropTypes.instanceOf(List).isRequired,
    addAptitud: PropTypes.func.isRequired,
    isCompleted: PropTypes.func.isRequired,
    deleteAptitud: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    redirect: PropTypes.bool.isRequired
  }

  state = {
    fields: { aptitud: '' },
    error: '',
    redirect: true
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.aptitudes.size !== nextProps.aptitudes.size) {
      return true;
    }
    if (this.state.redirect !== nextState.redirect) {
      return true;
    }
    return false;
  }

  componentWillMount() {
    if (this.props.redirect === this.state.redirect) {
      this.setState({ redirect: !this.props.redirect });
    }
  }

  validateForm = (aptitud) => {
    let error = '';
    let formIsValid = true;

    if (isEmpty(aptitud)) {
      formIsValid = false;
      error = '*This field can not be empty.';
    }
    this.setState({ error });
    return formIsValid;
  }

  handleChange = (e) => {
    const { fields } = this.state;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  handlePress = (e) => {
    if (e.which === 13) this.handleClick(e);
  }

  handleClick = (e) => {
    e.preventDefault();
    const { fields } = this.state;
    if (this.validateForm(this.state.fields.aptitud)) { 
      fields.id = uuid();
      this.setState({
        fields
      });     
      this.props.addAptitud(new AptitudModel(this.state.fields));
      this.setState({
        fields: { aptitud: '' },
        error: ''
      });
      this.props.isCompleted('aptitudCompleted', this.props.aptitudes.count() > 1);
    }
  }

  delete = (id) => {
    const aptitudes = this.props.aptitudes.filter(aptitud => aptitud.get('id') !== id);
    this.props.deleteAptitud(aptitudes);

    if (this.props.aptitudes.count() > 3) {
      this.props.isCompleted('aptitudCompleted', true);
    } else {
      this.props.isCompleted('aptitudCompleted', false);
      this.props.onDelete();
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/CV/personal-information"/>;
    }
    const header = 'Aptitudes';
    const isSimpleForm = true;
    return (
      <div className="aptitudes">
        <h1>{header}</h1>
        <div className="input-row">
          <input className="input-aptitude" type="text" name="aptitud"
            value={ this.state.fields.aptitud } onChange={ this.handleChange } 
            onKeyPress={ this.handlePress }>
          </input>
          <button id="add" onClick={ this.handleClick }>Add</button>
        </div>
        <span className="validation">{this.state.error}</span>
        <div className="display-aptitudes">
          {this.props.aptitudes.map(data => (
            <Display key={ data.get('id') } onDelete={ this.delete } 
              isSimpleForm={ isSimpleForm } data={ data }/>
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addAptitud: info => dispatch(addAptitud(info)),
  deleteAptitud: aptitudes => dispatch(deleteAptitud(aptitudes))
});

const mapStateToProps = ({ Cv }) => ({
  aptitudes: Cv.get('aptitudes')
});

const Aptitudes = connect(mapStateToProps, mapDispatchToProps)(AptitudesComponent);

export default Aptitudes;