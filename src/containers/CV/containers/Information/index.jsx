import { Map } from 'immutable';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './styles.css';
import { addInfo } from '../../actions/index';
import { isEmpty, isEmailValid, isValidName, isValidDate, isValidNumber } from '../../components/FormModal/validator';

class InformationComponent extends Component {

    constructor(props) {
        super(props);

        if(this.props.info === "undefined"){
            this.state = {
                fields: {
                    id: 1,
                    name: '',
                    lastName: '',
                    address: '',
                    number: '',
                    email: '',
                    birthday: '',
                    nationality: ''
                },
                errors: {
                    name: '',
                    lastName: '',
                    address: '',
                    number: '',
                    email: '',
                    birthday: '',
                    nationality: ''
                }
            };
        }else{
            this.state = {
                fields: {
                    id: this.props.info.get('id'),
                    name: this.props.info.get('name'),
                    lastName: this.props.info.get('lastName'),
                    address: this.props.info.get('address'),
                    number: this.props.info.get('number'),
                    email: this.props.info.get('email'),
                    birthday: this.props.info.get('birthday'),
                    nationality: this.props.info.get('nationality'),
                },
                errors: {
                    name: '',
                    lastName: '',
                    address: '',
                    number: '',
                    email: '',
                    birthday: '',
                    nationality: ''
                }
            };
        }

    }
    validateForm = () => {
        let fields = this.state.fields;
        let errors = {
            name: '',
            lastName: '',
            address: '',
            number: '',
            email: '',
            birthday: '',
            nationality: ''
        };
        let formIsValid = true;

        if(isEmpty(fields.name)){
            formIsValid = false;
            errors.name = "*Please enter your name.";
        }

        if (isEmpty(fields.lastName)) {
            formIsValid = false;
            errors.lastName = "*Please enter your last name.";
        }

        if (typeof fields.name !== "undefined") {
            if (!isValidName(fields.name)) {
                formIsValid = false;
                errors.name = "*Please enter alphabet characters only.";
            }
        }
        if (typeof fields.lastName !== "undefined") {
            if (!isValidName(fields.lastName)) {
                formIsValid = false;
                errors.lastName = "*Please enter alphabet characters only.";
            }
        }

        if (isEmpty(fields.email)) {
            formIsValid = false;
            errors.email = "*Please enter your email.";
        }

        if (typeof fields.email !== "undefined") {
            if (!isEmailValid(fields.email)) {
                formIsValid = false;
                errors.email = "*Please enter valid email.";
            }
        }

        if (isEmpty(fields.number)) {
            formIsValid = false;
            errors.number = "*Please enter your mobile number.";
        }

        if (typeof fields.number !== "undefined") {
            if (!isValidNumber(fields.number)) {
                formIsValid = false;
                errors.number = "*Please enter valid mobile number.";
            }
        }

        if (isEmpty(fields.address)) {
            formIsValid = false;
            errors.address = "*Please enter your address.";
        }

        if (isEmpty(fields.birthday)) {
            formIsValid = false;
            errors.birthday = "*Please enter your birthday.";
        }

        if(typeof fields.birthday !== "undefined"){
            if(!isValidDate(fields.birthday)) {
                formIsValid = false;
                errors.birthday = "*Please enter a valid format.";
            }
        }

        if (isEmpty(fields.nationality)) {
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
                id: 1,
                name: this.state.fields.name,
                lastName: this.state.fields.lastName,
                address: this.state.fields.address,
                number: this.state.fields.number,
                email: this.state.fields.email,
                birthday: this.state.fields.birthday,
                nationality: this.state.fields.nationality
            });
            this.props.addInfo(info);
            this.props.isCompleted('infoCompleted', true);
            alert("Saved!");
            
        }
    }
    render() {
        return (
            <>
                <h1>Information</h1>
                <form>
                    <div className="form-row">
                        <label>
                            Name:
                        </label>
                        <div className="personal-field">
                            <input
                                type="text"
                                name="name"
                                value={this.state.fields.name}
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
                                value={this.state.fields.lastName}
                                onChange={this.handleChange}
                            >
                            </input>
                            <span className="validation">{this.state.errors.lastName}</span>
                        </div>
                    </div>
                    <div className="form-row">
                        <label>
                            Address:
                            </label>
                        <div className="personal-field">
                            <input
                                id="address"
                                type="text"
                                name="address"
                                value={this.state.fields.address}
                                placeholder="Maria de Molina Street, 54, 28006 Madrid, Spain"
                                onChange={this.handleChange}
                            >
                            </input>
                            <span className="validation">{this.state.errors.address}</span>
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
                                value={this.state.fields.number}
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
                                value={this.state.fields.email}
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
                                placeholder="MM-DD-YYYY"
                                value={this.state.fields.birthday}
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
                                value={this.state.fields.nationality}
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