import './styles.css';

import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidenav">
            <ul>
                <li>
                    <NavLink
                        to="/CV/personal-information"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Personal Information
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/CV/education"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Education
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/CV/work-experience"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Work Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/CV/aptitudes"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Aptitudes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/CV/recommendation"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Recommendation
                     </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Sidebar);