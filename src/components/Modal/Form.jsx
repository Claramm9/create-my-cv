import { Map } from 'immutable';
import React, { Component } from 'react';

import './styles.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            field1: '',
            field2: '',
            startDate: '',
            endDate: '',
            description: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = (e) => {
        e.preventDefault();
        const data = Map({
            field1: this.state.field1,
            field2: this.state.field2,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            description: this.state.description
        });
        this.setState({
            field1: '',
            field2: '',
            startDate: '',
            endDate: '',
            description: ''
        })
        this.props.onConfirm(data)
    }
    render() {

        return (
            <form>
                <label className="modal-form">
                    {this.props.fields.get("field1")}:
                </label>
                <input
                    className="modal-input"
                    type="text" name="field1"
                    onChange={this.handleChange}
                    value={this.state.field1}
                >
                </input>
                <label className="modal-form">
                    {this.props.fields.get("field2")}:
                </label>
                <input
                    className="modal-input"
                    type="text" 
                    name="field2"
                    onChange={this.handleChange}
                    value={this.state.field2}
                >
                </input>
                <label className="modal-form">
                    {this.props.fields.get("startDate")}:
                </label>
                <input
                    className="modal-input"
                    type="text"
                    name="startDate"
                    placeholder="MM-DD-YYYY"
                    onChange={this.handleChange}
                    value={this.state.startDate}
                >
                </input>
                <label className="modal-form">
                    {this.props.fields.get("endDate")}:
                </label>
                <input
                    className="modal-input"
                    type="text"
                    name="endDate"
                    placeholder="MM-DD-YYYY"
                    onChange={this.handleChange}
                    value={this.state.endDate}
                >
                </input>
                <label className="modal-form">
                    {this.props.fields.get("description")}:
                </label>
                <textarea
                    rows="5"
                    id="description"
                    type="text"
                    name="description"
                    onChange={this.handleChange}
                    value={this.state.description}
                >
                </textarea>
                <div><input id="save" type="submit" value="Save" onClick={this.handleClick}/></div>
            </form >
        )
    }
}

export default Form;