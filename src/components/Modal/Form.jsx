import React, { Component } from 'react';
import './styles.css';

class Form extends Component {
    render() {
        return (
            <form>
                <label className="modal-form">
                    {this.props.fields.get("field1")}
                </label>
                <input className="modal-input" type="text" name="field1"></input>
                <label className="modal-form">
                    {this.props.fields.get("field2")}
                </label>
                <input className="modal-input" type="text" name="field2"></input>
                <label className="modal-form">
                    {this.props.fields.get("startDate")}
                </label>
                <input className="modal-input" type="text" name="startDate" placeholder="MM/YYYY"></input>
                <label className="modal-form">
                    {this.props.fields.get("endDate")}
                </label>
                <input className="modal-input" type="text" name="endDate" placeholder="MM/YYYY"></input>
                <label className="modal-form">
                    {this.props.fields.get("description")}:
                </label>
                <input id="description" type="text" name="description"></input>
                <input id="save" type="submit" value="Save" />
            </form >
        )
    }
}

export default Form;