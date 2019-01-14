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
        this.setState({[e.target.field1]: e.target.value});
    }
    render() {
        return (
            <form>
                <label className="modal-form">
                    {this.props.fields.get("field1")}
                </label>
                <input className="modal-input" type="text" name="field1" onChange={this.handleChange}></input>
                <label className="modal-form">
                    {this.props.fields.get("field2")}
                </label>
                <input className="modal-input" type="text" name="field2" onChange={this.handleChange}></input>
                <label className="modal-form">
                    {this.props.fields.get("startDate")}
                </label>
                <input className="modal-input" type="text" name="startDate" placeholder="MM/YYYY" onChange={this.handleChange}></input>
                <label className="modal-form">
                    {this.props.fields.get("endDate")}
                </label>
                <input className="modal-input" type="text" name="endDate" placeholder="MM/YYYY" onChange={this.handleChange}></input>
                <label className="modal-form">
                    {this.props.fields.get("description")}:
                </label>
                <input id="description" type="text" name="description" onChange={this.handleChange}></input>
                <input id="save" type="submit" value="Save" onClick={() => this.props.onConfirm(this.state)}/>
            </form >
        )
    }
}

export default Form;