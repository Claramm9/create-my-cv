import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import '../../styles.css';
import { fields } from './models/index';
import Modal from '../../components/Modal/index.jsx';
import ListItem from '../../components/ListItem/index.jsx';
import { EducationModel } from '../../models/EducationModel';
import FormModal from '../../components/FormModal/index.jsx';
import { addEducation, updateField } from '../../actions/index';

class EducationComponent extends Component {
  static propTypes = {
    education: PropTypes.instanceOf(List).isRequired,
    addEducation: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired,
    isCompleted: PropTypes.func.isRequired
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
    this.props.addEducation(new EducationModel(data));
    this.changeVisibility(false);
    this.props.isCompleted('eduCompleted', true);
  }

  update = (data) => {
    const title = 'education';
    const info = this.props.education.map(field => (field.get('id') === data.id
      ? field.set('id', data.id).set('center', data.center).set('studies', data.studies).set('startDate', data.startDate)
        .set('endDate', data.endDate)
        .set('description', data.description)
      : field));
    this.props.updateField(info, title);
    this.changeVisibility(false);
  }

  render() {
    const header = 'Create education';
    const isSimpleForm = false;
    const modal = this.state.isEditing ? null : (
      <Modal onChangeVisibility={ this.changeVisibility }
        isVisible={ this.state.isVisible } header={ header }>
        <FormModal onConfirm={ this.confirm } fields={ fields } isEditing={ this.state.isEditing }/>
      </Modal>);
    const listItems = this.props.education.map(data => (
      <ListItem
        key={ data.get('id') } isSimpleForm={ isSimpleForm } header={ header }
        fields={ fields } data={ data } isEditing={ this.state.isEditing }
        onConfirm={ this.update } onEditing={ this.handleEditing }
      ></ListItem>
    ));
    return (
      <>
        <h1>Education</h1>
        <div><button className="add" onClick={ this.handleAdd }>+</button></div>
        {modal}
        {listItems}
      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addEducation: info => dispatch(addEducation(info)),
  updateField: (info, title) => dispatch(updateField(info, title))
});
const mapStateToProps = ({ Cv }) => ({
  education: Cv.get('education')
});

const Education = connect(mapStateToProps, mapDispatchToProps)(EducationComponent);

export default Education;