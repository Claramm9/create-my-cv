/* eslint-disable array-callback-return */
import { Record } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles.css';
import Sidebar from './components/Sidebar/index.jsx';
import Header from '../../components/Header/index.jsx';
import Education from './containers/Education/index.jsx';
import Aptitudes from './containers/Aptitudes/index.jsx';
import Information from './containers/Information/index.jsx';
import { deleteAll, writeAll } from './services/fileExport/index';
import WorkExperience from './containers/WorkExperience/index.jsx';
import Recommendation from './containers/Recommendations/index.jsx';

class CV extends Component {
  static propTypes = {
    Cv: PropTypes.instanceOf(Record).isRequired
  }

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
        if (this.state.infoCompleted && this.state.eduCompleted 
                && this.state.workCompleted && this.state.aptitudCompleted) {
          this.setState({ allCompleted: true });
        }
      }
    );
  }

  hideButton = () => {
    this.setState({ allCompleted: false });
  }

  handleDownload = (e) => {
    e.preventDefault();

    const { props } = this;

    deleteAll();
    writeAll(props.Cv.get('information'), props.Cv.get('education'), 
      props.Cv.get('workExperience'), props.Cv.get('aptitudes'), props.Cv.get('recommendations'));
  }

  render() {
    return (
      <Router>
        <div>
          <Header downloadButton={ this.state.allCompleted } onDownload={ this.handleDownload } />
          <div className="wrapper">
            <Sidebar flags={ this.state } />
            <div className="main">
              <Route
                path="/CV/personal-information"
                render={ (props) => (<Information 
                  { ...props } isCompleted={ this.completed } />) 
                } />
              <Route
                path="/CV/education"
                render={ (props) => (<Education 
                  { ...props } isCompleted={ this.completed } />) } />
              <Route
                path="/CV/work-experience"
                render={ (props) => (<WorkExperience 
                  { ...props } isCompleted={ this.completed } />) } />
              <Route
                path="/CV/aptitudes"
                render={ (props) => (<Aptitudes 
                  { ...props } isCompleted={ this.completed } 
                  onDelete={ this.hideButton } />) } />
              <Route
                path="/CV/recommendation"
                render={ (props) => (<Recommendation { ...props } 
                  isCompleted={ this.completed } />) } />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = ({ Cv }) => ({
  Cv
});
export default connect(mapStateToProps)(CV);