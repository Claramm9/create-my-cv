import React, { Component } from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import './styles.css';
import { addInfo } from '../../actions/index';

class InformationC extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            lastName: "",
            direction: "",
            number: "",
            email: "",
            birthday: "",
            nationality: ""
        };
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick = (e) => {
        e.preventDefault();
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
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Last Name:
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
                        </label>
                    </div>
                    <div className="form-row">
                        <label>
                            Direction:
                        <input id="direction" type="text" name="direction" value={this.state.direction} placeholder="Maria de Molina Street, 54, 28006 Madrid, Spain" onChange={this.handleChange}></input>
                        </label>
                    </div>
                    <div className="form-row">
                        <label>
                            Telephone number:
                        <input type="text" name="number" placeholder="(+34) ..." value={this.state.number} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Email:
                        <input type="email" name="email" placeholder="....@..." value={this.state.email} onChange={this.handleChange}></input>
                        </label>
                    </div>
                    <div className="form-row">
                        <label>
                            Date of Birth:
                        <input type="text" name="birthday" placeholder="--/--/----" value={this.state.birthday} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Nationality:
                        <input type="text" name="nationality" value={this.state.nationality} onChange={this.handleChange}></input>
                        </label>
                    </div>
                    <input id="save" type="submit" value="Save" onClick={this.handleClick}/>
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

const Information = connect(mapStateToProps, mapDispatchToProps)(InformationC);

export default Information;