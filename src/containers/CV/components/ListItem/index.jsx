import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import '../../styles.css';
import Modal from '../Modal/index.jsx';
import pencil from '../../../../assets/icons/pencil.png';
import FormModal from '../FormModal/index.jsx';
import Display from '../../../../components/Display/index.jsx';

class ListItem extends Component {

  static propTypes = {
    fields: PropTypes.array.isRequired,
    data: PropTypes.instanceOf(Map),
    isEditing: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onEditing: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      isEditing: props.isEditing
    };
  }

  handleEditing = () => {
    this.changeVisibility(true);
    this.changeEdition(true);

    this.props.onEditing();
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
    this.changeVisibility(false);
    this.props.onConfirm(data);
  }

  render() {
    const { props } = this;
    return (
      <div className="show-info">
        <Display 
          isSimpleForm={ props.isSimpleForm } 
          header={ props.header } 
          fields={ props.fields } 
          data={ props.data } 
        />
        <div>
          <button 
            className="edit" 
            onClick={ this.handleEditing }
          >
            <img 
              src={ pencil } 
              alt="Edit" 
            />
          </button>
        </div>
        {this.state.isEditing 
          ? <Modal 
            onChangeVisibility={ this.changeVisibility } 
            isVisible={ this.state.isVisible } 
            header={ props.header }>
            <FormModal 
              onConfirm={ this.confirm } 
              fields={ props.fields } 
              info={ props.data } 
              isEditing={ this.state.isEditing } />
          </Modal>
          : null
        }
      </div>
    );
  }
}
    
export default ListItem;
