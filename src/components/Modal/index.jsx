import { Map, List } from 'immutable';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './styles.css';
import Form from './Form.jsx';
import SimpleForm from './SimpleForm.jsx';

class Modal extends Component {
    state = {
        isVisible: false
    }
    static propTypes = {
        fields: PropTypes.instanceOf(Map),
        info: PropTypes.instanceOf(List),
        header: PropTypes.string.isRequired,
        isSimpleForm: PropTypes.bool.isRequired
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
                        {this.props.isSimpleForm ? 
                            <SimpleForm onConfirm={this.confirm} /> : 
                            <Form fields={fields} onConfirm={this.confirm} info={this.props.info} />}
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