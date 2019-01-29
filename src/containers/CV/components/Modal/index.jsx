import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './styles.css';

class Modal extends Component {
    static propTypes = {
        isVisible: PropTypes.bool.isRequired,
        header: PropTypes.string.isRequired
    }

    state = {
        isVisible: this.props.isVisible
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isVisible !== nextProps.isVisible) {
            this.setState({
                isVisible: nextProps.isVisible
            });
        }
    }

    setVisibility = (value) => {
        if (this.state.isVisible !== value) {
            this.setState({ isVisible: value })
        }
        this.props.onChangeVisibility(value);
    }

    confirm = (data) => {
        this.setVisibility(false);
        this.props.onConfirm(data);
    }

    render() {
        const displayModal = this.state.isVisible ? { display: 'block' } : { display: 'none' };
        return (
            <>
                <div className="modal" style={displayModal} onClick={() => this.setVisibility(false)}>
                    <div className="modal-content" style={displayModal} onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 style={{ float: "left" }}>{this.props.header}</h2>
                            <button style={{ float: "right" }} onClick={() => this.setVisibility(false)} title="Close" className="close">X</button>
                        </div>
                        {this.props.children}
                    </div>
                </div>
                {/* <div onClick={() => this.setVisibility(true)}>
                    {this.props.children}
                </div> */}
            </>
        );
    }
}

export default Modal;