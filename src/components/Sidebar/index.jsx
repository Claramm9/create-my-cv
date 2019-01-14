import './styles.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidenav">
                <ul>
                    <li><Link to="/CV/personal-information" className="sidebar-item">Personal Information</Link></li>
                    <li><Link to="/CV/education" className="sidebar-item">Education</Link></li>
                    <li><Link to="/CV/work-experience" className="sidebar-item">Work Experience</Link></li>
                    <li><Link to="/CV/aptitudes" className="sidebar-item">Aptitudes</Link></li>
                    <li><Link to="/CV/recommendation" className="sidebar-item">Recommendation</Link></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;