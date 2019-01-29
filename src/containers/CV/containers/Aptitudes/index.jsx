import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import './styles.css';
import '../../styles.css';
import { addAptitud, deleteAptitud } from '../../actions/index';
import Display from '../../../../components/Display/index.jsx';
import { isEmpty } from '../../components/FormModal/validator';

class AptitudesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            aptitud: '',
            error: ''
        };
    }

    validateForm = () => {
        let error = '';
        let formIsValid = true;

        if (isEmpty(this.state.aptitud)) {
            formIsValid = false;
            error = "*This field can not be empty.";
        }
        this.setState({
            error: error
        });
        return formIsValid;
    }

    handleChange = (e) => {
        this.setState({ aptitud: e.target.value });
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            const data =  Map({
                id: this.props.aptitudes.size,
                aptitud: this.state.aptitud
            });
            this.setState({
                aptitud: '',
                error: ''
            })
            this.props.addAptitud(data);
        }
    }

    delete = (id) => {
        const aptitudes = this.props.aptitudes.filter(aptitud => aptitud.get('id') !== id)
        this.props.deleteAptitud(aptitudes);
    }

    render() {
        const header = "Aptitudes";
        const isSimpleForm = true;
        return (
            <div className="aptitudes">
                <h1>{header}</h1>
                <div className="input-row">
                    <input
                        className="input-aptitude"
                        type="text"
                        name="aptitud"
                        value={this.state.aptitud}
                        onChange={this.handleChange}
                    >
                    </input>
                    <button id="add" onClick={this.handleClick}>Add</button>
                </div>
                <span className="validation">{this.state.error}</span>
                <div className="display-aptitudes">
                    {this.props.aptitudes.map(data => (
                        <Display key={data.get('id')} onDelete={this.delete} isSimpleForm={isSimpleForm} data={data} />
                    ))}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addAptitud: info => dispatch(addAptitud(info)),
        deleteAptitud: aptitudes => dispatch(deleteAptitud(aptitudes))
    };
}

const mapStateToProps = ({ Cv }) => ({
    aptitudes: Cv.get('aptitudes')
})

const Aptitudes = connect(mapStateToProps, mapDispatchToProps)(AptitudesComponent);

export default Aptitudes;