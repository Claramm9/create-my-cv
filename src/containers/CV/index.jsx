import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles.css';
import Sidebar from './components/Sidebar/index.jsx';
import Header from '../../components/Header/index.jsx';
import Education from './components/Education/index.jsx';
import Aptitudes from './components/Aptitudes/index.jsx';
import Information from './components/Information/index.jsx';
import WorkExperience from './components/WorkExperience/index.jsx';
import Recommendation from './components/Recommendations/index.jsx';

class CV extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="wrapper">
                            <Sidebar />
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