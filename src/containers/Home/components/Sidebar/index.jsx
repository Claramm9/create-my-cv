import './styles.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidenav">
                <ul>
                    <li><Link to="/personal-information" className="sidebar-item">Personal Information</Link></li>
                    <li><Link to="/education" className="sidebar-item">Education</Link></li>
                    <li><Link to="/work-experience" className="sidebar-item">Work Experience</Link></li>
                    <li><Link to="/aptitudes" className="sidebar-item">Aptitudes</Link></li>
                    <li><Link to="/recommendation" className="sidebar-item">Recommendation</Link></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;