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