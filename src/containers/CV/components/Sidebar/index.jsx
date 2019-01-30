import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './styles.css';
import Check from '../Check/index.jsx';

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
                    <Check  className="check"/>
                </li>
                <li>
                    <NavLink
                        to="/CV/education"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Education
                    </NavLink>
                    <Check  className="check"/>
                </li>
                <li>
                    <NavLink
                        to="/CV/work-experience"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Work Experience
                    </NavLink>
                    <Check  className="check"/>
                </li>
                <li>
                    <NavLink
                        to="/CV/aptitudes"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Aptitudes
                    </NavLink>
                    <Check  className="check"/>
                </li>
                <li>
                    <NavLink
                        to="/CV/recommendation"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Recommendation
                     </NavLink>
                     <Check  className="check"/>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Sidebar);