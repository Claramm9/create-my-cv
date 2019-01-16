import { Map } from 'immutable';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './styles.css';
import { addInfo } from '../../actions/index';
import FormValidator from '../../../../components/Modal/validator';

class InformationComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            lastName: '',
            direction: '',
            number: '',
            email: '',
            birthday: '',
            nationality: ''
        };
        this.errors = {
            name: '',
            lastName: '',
            direction: '',
            number: '',
            email: '',
            birthday: '',
            nationality: ''
        };

    }

    handleClick = (e) => {
        e.preventDefault();
        // if (this.isEmpty(this.state.name)) {
        //     this.errors.name = "Should not be empty!";
        // }
        const info = Map({
            name: this.state.name,
            lastName: this.state.lastName,
            direction: this.state.direction,
            number: this.state.number,
            email: this.state.email,
            birthday: this.state.birthday,
            nationality: this.state.nationality
        });
        this.props.addInfo(info);
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
                            <span className="validation">{this.errors.name}</span>
                        </div>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={this.props.info.get('lastName')}
                                onChange={this.handleChange}
                            >
                            </input>
                        </label>
                        <span className="validation">{this.errors.lastName}</span>
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
                            <span className="validation">{this.errors.direction}</span>
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
                                placeholder="(+34) ..."
                                value={this.props.info.get('number')}
                                onChange={this.handleChange}
                            >
                            </input>
                            <span className="validation">{this.errors.number}</span>
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
                            <span className="validation">{this.errors.email}</span>
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
                            <span className="validation">{this.errors.birthday}</span>
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
                            <span className="validation">{this.errors.nationality}</span>
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