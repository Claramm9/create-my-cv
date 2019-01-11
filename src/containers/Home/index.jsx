import './styles.css';
import React, { Component } from 'react';
import Header from './components/Header/index';
import Sidebar from './components/Sidebar/index';
import Information from '../components/Information/index';
import Education from '../components/Education/index';
import WorkExperience from '../components/WorkExperience/index';
import Aptitudes from '../components/Aptitudes/index';
import Recommendation from '../components/Recommendations/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHide: false
        };
    }
    onClick = () => {
        this.setState({
            isHide: !this.state.isHide
        })
    }

    render() {
        let disp = this.state.isHide ? "none" : "flex";
        let dispMain = this.state.isHide ? "flex" : "none";

        return (
            <Router>
                <div>
                    <Header />
                    <button className="button-start" style={{ display: disp }} onClick={this.onClick}>START</button>
                    <div className="wrapper" style={{ display: dispMain }}>
                        <div className="sidenav">
                            <Sidebar />
                        </div>
                        <div className="main">
                            <Route path="/personal-information" component={Information} />
                            <Route path="/education" component={Education} />
                            <Route path="/work-experience" component={WorkExperience} />
                            <Route path="/aptitudes" component={Aptitudes} />
                            <Route path="/recommendation" component={Recommendation} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
};

export default Home;