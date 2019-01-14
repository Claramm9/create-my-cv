import './styles.css';
import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Sidebar from '../../components/Sidebar/index';
import Information from './components/Information/index';
import Education from './components/Education/index';
import WorkExperience from './components/WorkExperience/index';
import Aptitudes from './components/Aptitudes/index';
import Recommendation from './components/Recommendations/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class CV extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="wrapper">
                        <div className="sidenav">
                            <Sidebar />
                        </div>
                        <div className="main">
                            <Route path="/CV/personal-information" component={Information} />
                            <Route path="/CV/education" component={Education} />
                            <Route path="/CV/work-experience" component={WorkExperience} />
                            <Route path="/CV/aptitudes" component={Aptitudes} />
                            <Route path="/CV/recommendation" component={Recommendation} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
};

export default CV;