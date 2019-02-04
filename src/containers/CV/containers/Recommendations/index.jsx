import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import './styles.css';
import '../../styles.css';
import { fields } from './models/index';
import Modal from '../../components/Modal/index.jsx';
import ListItem from '../../components/ListItem/index.jsx';
import FormModal from '../../components/FormModal/index.jsx';
import { addRecommendation, updateField } from '../../actions';

class RecommendationsComponent extends Component {

  static propTypes = {
    recommendations: PropTypes.instanceOf(List),
    addRecommendation: PropTypes.func.isRequired,
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
    this.props.addRecommendation(data);
    this.changeVisibility(false);
    this.props.isCompleted('recomCompleted', true);
  }

  update = (data) => {
    const title = 'recommendation';
    const info = this.props.recommendations.map(field => (field.get('id') === data.get('id')
      ? field.set('id', data.get('id')).set('name', data.get('name')).set('recommendation', data.get('recommendation'))
      : field));
    this.props.updateField(info, title);
    this.changeVisibility(false);
  }

  render() {
    const header = 'Create recommendations';
    const isSimpleForm = false;
    return (
        <>
          <h1>Recommendation</h1>
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
          {this.props.recommendations.map(data => (
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
    addRecommendation: info => dispatch(addRecommendation(info)),
    updateField: (info, title) => dispatch(updateField(info, title))
  };
}

const mapStateToProps = ({ Cv }) => ({
  recommendations: Cv.get('recommendations'),
  Cv
});

const Recommendations = connect(mapStateToProps, mapDispatchToProps)(RecommendationsComponent);

export default Recommendations;