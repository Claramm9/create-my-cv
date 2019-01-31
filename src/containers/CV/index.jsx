import { connect } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles.css';
import Sidebar from './components/Sidebar/index.jsx';
import Header from '../../components/Header/index.jsx';
import Education from './containers/Education/index.jsx';
import Aptitudes from './containers/Aptitudes/index.jsx';
import Information from './containers/Information/index.jsx';
import WorkExperience from './containers/WorkExperience/index.jsx';
import Recommendation from './containers/Recommendations/index.jsx';

class CV extends Component {

    state = {
        infoCompleted: false,
        eduCompleted: false,
        workCompleted: false,
        aptitudCompleted: false,
        recomCompleted: false,
        allCompleted: false
    }

    completed = (name, value) => {
        this.setState(
            { [name]: value },
            () => {
                if (this.state.infoCompleted && this.state.eduCompleted && this.state.workCompleted && this.state.aptitudCompleted) {
                    this.setState({ allCompleted: true })
                }
            }
        );
    }

    hideButton = () => {
        this.setState({ allCompleted: false })
    }

    handleDownload = (e) => {
        e.preventDefault();

        const information = this.props.Cv.get('information');
        const education = this.props.Cv.get('education');
        const workExperience = this.props.Cv.get('workExperience');
        const aptitudes = this.props.Cv.get('aptitudes');
        const recommendations = this.props.Cv.get('recommendations');

        console.log("CV:");
        console.log("Personal Information:");
        console.log("Nombre: " + information.get('name'));
        console.log("Apellido: " + information.get('lastName'));
        console.log("Dirección: " + information.get('address'));
        console.log("Teléfono: " + information.get('number'));
        console.log("Email: " + information.get('email'));
        console.log("Birthday: " + information.get('birthday'));
        console.log("Nationality: " + information.get('nationality'));

        console.log("Education:");
        education.map(field => {
            console.log("Centro estudios: " + field.get('center'))
            console.log("Estudios: " + field.get('studies'))
            console.log("Fecha inicio: " + field.get('startDate'))
            console.log("Fecha fin: " + field.get('endDate'))
            console.log("Description: " + field.get('description'))
        })

        console.log("Work Experience:");
        workExperience.map(field => {
            console.log("Compañia: " + field.get('company'))
            console.log("Puesto: " + field.get('position'))
            console.log("Fecha inicio: " + field.get('startDate'))
            console.log("Fecha fin: " + field.get('endDate'))
            console.log("Description: " + field.get('description'))
        })

        console.log("Aptitudes:");
        aptitudes.map(field => {
            console.log(field.get('aptitud'))
        })

        console.log("Recommendations:");
        recommendations.map(field => {
            console.log("Nombre: " + field.get('name'))
            console.log("Recomendación: " + field.get('recommendation'))
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <Header downloadBut={this.state.allCompleted} onDownload={this.handleDownload} />
                    <div className="wrapper">
                        <Sidebar flags={this.state} />
                        <div className="main">
                            <Route
                                path="/CV/personal-information"
                                render={(props) => <Information {...props} isCompleted={this.completed} />} />
                            <Route
                                path="/CV/education"
                                render={(props) => <Education {...props} isCompleted={this.completed} />} />
                            <Route
                                path="/CV/work-experience"
                                render={(props) => <WorkExperience {...props} isCompleted={this.completed} />} />
                            <Route
                                path="/CV/aptitudes"
                                render={(props) => <Aptitudes {...props} isCompleted={this.completed} onDelete={this.hideButton} />} />
                            <Route
                                path="/CV/recommendation"
                                render={(props) => <Recommendation {...props} isCompleted={this.completed} />} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
};

const mapStateToProps = ({ Cv }) => ({
    Cv: Cv
})

export default connect(mapStateToProps)(CV);