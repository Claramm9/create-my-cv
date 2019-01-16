import { Map } from 'immutable';
import React, { Component } from 'react';

import './styles.css';

class SimpleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            field: '',
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = (e) => {
        e.preventDefault();
        const data = Map({
            field: this.state.field
        });
        this.setState({
            field: ''
        })
        this.props.onConfirm(data)
    }
    render() {

        return (
            <form>
                <textarea
                    rows="5"
                    id="description"
                    type="text"
                    name="field"
                    onChange={this.handleChange}
                    value={this.state.description}
                >
                </textarea>
                <div><input id="save" type="submit" value="Save" onClick={this.handleClick}/></div>
            </form >
        )
    }
}

export default SimpleForm;