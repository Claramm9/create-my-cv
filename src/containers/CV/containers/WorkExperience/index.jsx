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

class WorkExperienceComponent extends Component {
    static propTypes = {
      workExperience: PropTypes.instanceOf(List),
      addWork: PropTypes.func.isRequired,
      isCompleted: PropTypes.func.isRequired,
      updateField: PropTypes.func.isRequired
    }

    constructor() {
      super();

      this.state = {
        isVisible: false,
        isEditing: false
      };
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
      this.props.addWork(data);
      this.changeVisibility(false);
      this.props.isCompleted('workCompleted', true);
    }

    update = (data) => {
      const title = 'workExperience';
      const info = this.props.workExperience.map(field => (field.get('id') === data.get('id')
        ? field.set('id', data.get('id')).set('company', data.get('company')).set('position', data.get('position')).set('startDate', data.get('startDate'))
          .set('endDate', data.get('endDate'))
          .set('description', data.get('description'))
        : field));
      this.props.updateField(info, title);
      this.changeVisibility(false);
    }

    render() {
      const header = 'Create work experience';
      const isSimpleForm = false;

      return (
            <>
                <h1>Work Experience</h1>
                <div><button className="add" onClick={ this.handleAdd }>+</button></div>
                {this.state.isEditing ? null
                  : <Modal 
                    onChangeVisibility={ this.changeVisibility } 
                    isVisible={ this.state.isVisible } 
                    header={ header }
                  >
                    <FormModal 
                      onConfirm={ this.confirm } 
                      fields={ fields } 
                      isEditing={ this.state.isEditing } 
                    />
                  </Modal>
                }
                {this.props.workExperience.map(data => (
                  <ListItem
                    key={ data.get('id') }
                    isSimpleForm={ isSimpleForm }
                    header={ header }
                    fields={ fields }
                    data={ data }
                    isEditing={ this.state.isEditing }
                    onConfirm={ this.update }
                    onEditing={ this.handleEditing }
                  ></ListItem>
                ))}
            </>
      );
    }
}

function mapDispatchToProps(dispatch) {
  return {
    addWork: info => dispatch(addWork(info)),
    updateField: (info, title) => dispatch(updateField(info, title))
  };
}

const mapStateToProps = ({ Cv }) => ({
  workExperience: Cv.get('workExperience')
});

const WorkExperience = connect(mapStateToProps, mapDispatchToProps)(WorkExperienceComponent);

export default WorkExperience;