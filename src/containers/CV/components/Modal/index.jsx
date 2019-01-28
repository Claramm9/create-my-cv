import { Map, List } from 'immutable';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './styles.css';
import FormModal from '../FormModal/index.jsx';

class Modal extends Component {
    state = {
        isVisible: false
    }
    static propTypes = {
        fields: PropTypes.array.isRequired,
        info: PropTypes.instanceOf(Map),
        header: PropTypes.string.isRequired,
        isSimpleForm: PropTypes.bool,
        isEditing: PropTypes.bool.isRequired
    }

    setVisibility = (value) => {
        if (this.state.isVisible !== value) {
            this.setState({ isVisible: value })
        }
    }

    confirm = (data) => {
        this.setVisibility(false);
        this.props.onConfirm(data);
    }

    render() {
        const fields = this.props.fields;
        const displayModal = this.state.isVisible ? { display: 'block' } : { display: 'none' };
        return (
            <>
                <div className="modal" style={displayModal} onClick={() => this.setVisibility(false)}>
                    <div className="modal-content" style={displayModal} onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 style={{ float: "left" }}>{this.props.header}</h2>
                            <button style={{ float: "right" }} onClick={() => this.setVisibility(false)} title="Close" className="close">X</button>
                        </div>
                        <FormModal onConfirm={this.confirm} fields={fields} info={this.props.info} isEditing={this.props.isEditing}/>
                    </div>
                </div>
                <div onClick={() => this.setVisibility(true)}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Modal;