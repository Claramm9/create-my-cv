import './styles.css';
import React, { Component } from 'react';
import Form from './Form';

class Modal extends Component {
    state = {
        isVisible: false
    }

    setVisibility = (value) => {
        if (this.state.isVisible !== value) {
            this.setState({ isVisible: value })
        }
    }

    confirm = () => {
        this.setVisibility(false)
    }

    render() {
        const fields = this.props.fields;
        console.log(fields.get("center"));
        const displayModal = this.state.isVisible ? { display: 'block' } : { display: 'none' };
        return (
            <>
                <div className="modal" style={displayModal} onClick={() => this.setVisibility(false)}>
                    <div className="modal-content" style={displayModal} onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 style={{ float: "left" }}>{this.props.header}</h2>
                            <button style={{ float: "right" }} onClick={() => this.setVisibility(false)} title="Close" className="close">X</button>
                        </div>
                        <Form fields={fields} onConfirm={this.confirm}/>
                        {/* <div>
                            <button onClick={this.confirm}>Confirm</button>
                            <button onClick={() => this.setVisibility(false)}>Cancel</button>
                        </div> */}
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