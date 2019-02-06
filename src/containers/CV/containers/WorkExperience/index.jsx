import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import '../../styles.css';
import { fields } from './models/index';
import Modal from '../../components/Modal/index.jsx';
import ListItem from '../../components/ListItem/index.jsx';
import { addWork, updateField } from '../../actions/index';
import FormModal from '../../components/FormModal/index.jsx';
import { WorkExperienceModel } from '../../models/WorkExperienceModel';

class WorkExperienceComponent extends Component {
  static propTypes = {
    workExperience: PropTypes.instanceOf(List),
    addWork: PropTypes.func.isRequired,
    isCompleted: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired
  }

  state = {
    isVisible: false,
    isEditing: false
  }

  handleAdd = () => {
    this.changeVisibility(true);
    this.changeEdition(false);
  }

  handleEditing = () => {
    this.changeVisibility(true);
    this.changeEdition(true);
  }

  changeVisibility = (value) => {
    if (this.state.isVisible !== value) {
      this.setState({ isVisible: value });
    }
  }

  changeEdition = (value) => {
    if (this.state.isEditing !== value) {
      this.setState({ isEditing: value });
    }
  }

  confirm = (data) => {
    this.props.addWork(new WorkExperienceModel(data));
    this.changeVisibility(false);
    this.props.isCompleted('workCompleted', true);
  }

  update = (data) => {
    const title = 'workExperience';
    const info = this.props.workExperience.map(field => ((field.get('id') === data.id)
      ? field.set('id', data.id).set('company', data.company).set('position', data.position).set('startDate', data.startDate)
        .set('endDate', data.endDate)
        .set('description', data.description)
      : field));
    this.props.updateField(info, title);
    this.changeVisibility(false);
  }

  render() {
    const header = 'Create work experience';
    const isSimpleForm = false;
    const modal = this.state.isEditing ? null : (
      <Modal onChangeVisibility={ this.changeVisibility } 
        isVisible={ this.state.isVisible } header={ header }>
        <FormModal onConfirm={ this.confirm } fields={ fields } isEditing={ this.state.isEditing }/>
      </Modal>);
    const listItems = this.props.workExperience.map(data => (
      <ListItem
        key={ data.get('id') } isSimpleForm={ isSimpleForm } header={ header }
        fields={ fields } data={ data } isEditing={ this.state.isEditing }
        onConfirm={ this.update } onEditing={ this.handleEditing }
      ></ListItem>
    ));
    return (
      <>
        <h1>Work Experience</h1>
        <div><button className="add" onClick={ this.handleAdd }>+</button></div>
        { modal }
        { listItems }
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addWork: info => dispatch(addWork(info)),
  updateField: (info, title) => dispatch(updateField(info, title))
});
const mapStateToProps = ({ Cv }) => ({
  workExperience: Cv.get('workExperience')
});
const WorkExperience = connect(mapStateToProps, mapDispatchToProps)(WorkExperienceComponent);

export default WorkExperience;