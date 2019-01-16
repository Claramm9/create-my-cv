import { Map } from 'immutable';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './styles.css';
import { addInfo } from '../../actions/index';

class InformationComponent extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     fields: {
        //         name: '',
        //         lastName: '',
        //         direction: '',
        //         number: '',
        //         email: '',
        //         birthday: '',
        //         nationality: ''
        //     },
        //     errors: {
        //         name: '',
        //         lastName: '',
        //         direction: '',
        //         number: '',
        //         email: '',
        //         birthday: '',
        //         nationality: ''
        //     }
        // };
        this.state = {
            fields: {},
            errors: {
                name: '',
                lastName: '',
                direction: '',
                number: '',
                email: '',
                birthday: '',
                nationality: ''
            }
        };
    }
    validateForm = () => {
        let fields = this.state.fields;
        let errors = {
            name: '',
            lastName: '',
            direction: '',
            number: '',
            email: '',
            birthday: '',
            nationality: ''
        };
        let formIsValid = true;

        if (!fields.name) {
            formIsValid = false;
            errors.name = "*Please enter your name.";
        }

        if (!fields.lastName) {
            formIsValid = false;
            errors.lastName = "*Please enter your last name.";
        }

        if (typeof fields.name !== "undefined") {
            if (!fields.name.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors.name = "*Please enter alphabet characters only.";
            }
        }

        if (!fields.email) {
            formIsValid = false;
            errors.email = "*Please enter your email.";
        }

        if (typeof fields.email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields.email)) {
                formIsValid = false;
                errors.email = "*Please enter valid email.";
            }
        }

        if (!fields.number) {
            formIsValid = false;
            errors.number = "*Please enter your mobile number.";
        }

        if (typeof fields.number !== "undefined") {
            var patt = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
            if (!patt.test(fields.number)) {
                formIsValid = false;
                errors.number = "*Please enter valid mobile number.";
            }
        }

        if (!fields.direction) {
            formIsValid = false;
            errors.direction = "*Please enter your direction.";
        }

        if (!fields.birthday) {
            formIsValid = false;
            errors.birthday = "*Please enter your birthday.";
        }

        if (!fields.nationality) {
            formIsValid = false;
            errors.nationality = "*Please enter your nationality.";
        }


        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            const info = Map({
                name: this.state.fields.name,
                lastName: this.state.lastName,
                direction: this.state.direction,
                number: this.state.number,
                email: this.state.email,
                birthday: this.state.birthday,
                nationality: this.state.nationality
            });
            this.props.addInfo(info);
            alert("Saved!");
        }
    }
    render() {
        return (
            <>
                <form>
                    <div className="form-row">
                        <label>
                            Name:
                        </label>
                        <div className="personal-field">
                            <input
                                type="text"
                                name="name"
                                value={this.props.info.get('name')}
                                onChange={this.handleChange}
                            >
                            </input>
                            <span className="validation">{this.state.errors.name}</span>
                        </div>
                        <label>
                            Last Name:
                            </label>
                        <div className="personal-field">
                            <input
                                type="text"
                                name="lastName"
                                value={this.props.info.get('lastName')}
                                onChange={this.handleChange}
                            >
                            </input>
                            <span className="validation">{this.state.errors.lastName}</span>
                        </div>
                    </div>
                    <div className="form-row">
                        <label>
                            Direction:
                            </label>
                        <div className="personal-field">
                            <input
                                id="direction"
                                type="text"
                                name="direction"
                                value={this.props.info.get('direction')}
                                placeholder="Maria de Molina Street, 54, 28006 Madrid, Spain"
                                onChange={this.handleChange}
                            >
                            </input>
                            <span className="validation">{this.state.errors.direction}</span>
                        </div>
                    </div>
                    <div className="form-row">
                        <label>
                            Telephone number:
                            </label>
                        <div className="personal-field">
                            <input
                                type="text"
                                name="number"
                                placeholder="+34..."
                                value={this.props.info.get('number')}
                                onChange={this.handleChange}
                            >
                            </input>
                            <span className="validation">{this.state.errors.number}</span>
                        </div>
                        <label>
                            Email:
                        </label>
                        <div className="personal-field">
                            <input
                                type="email"
                                name="email"
                                placeholder="....@..."
                                value={this.props.info.get('email')}
                                onChange={this.handleChange}
                            >
                            </input>
                            <span className="validation">{this.state.errors.email}</span>
                        </div>
                    </div>
                    <div className="form-row">
                        <label>
                            Date of Birth:
                            </label>
                        <div className="personal-field">
                            <input
                                type="text"
                                name="birthday"
                                placeholder="--/--/----"
                                value={this.props.info.get('birthday')}
                                onChange={this.handleChange}></input>
                            <span className="validation">{this.state.errors.birthday}</span>
                        </div>
                        <label>
                            Nationality:
                            </label>
                        <div className="personal-field">
                            <input
                                type="text"
                                name="nationality"
                                value={this.props.info.get('nationality')}
                                onChange={this.handleChange}
                            >
                            </input>
                            <span className="validation">{this.state.errors.nationality}</span>
                        </div>
                    </div>
                    <input
                        id="save"
                        type="submit"
                        value="Save"
                        onClick={this.handleClick} />
                </form>
            </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addInfo: info => dispatch(addInfo(info))
    };
}

const mapStateToProps = ({ Cv }) => ({
    info: Cv.get('information')
})

const Information = connect(mapStateToProps, mapDispatchToProps)(InformationComponent);

export default Information;