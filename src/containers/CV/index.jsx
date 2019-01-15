import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles.css';
import Sidebar from './components/Sidebar';
import Header from '../../components/Header';
import Education from './components/Education';
import Aptitudes from './components/Aptitudes';
import Information from './components/Information';
import WorkExperience from './components/WorkExperience';
import Recommendation from './components/Recommendations';

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