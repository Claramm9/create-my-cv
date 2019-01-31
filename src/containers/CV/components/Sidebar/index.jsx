import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './styles.css';
import Check from '../Check/index.jsx';

const Sidebar = ({ flags }) => {
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
                    {flags.infoCompleted && <Check className="check"/>}
                </li>
                <li>
                    {flags.infoCompleted && <NavLink
                        to="/CV/education"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Education
                    </NavLink>}
                    {flags.eduCompleted && <Check className="check"/>}
                </li>
                <li>
                    {flags.eduCompleted && <NavLink
                        to="/CV/work-experience"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Work Experience
                    </NavLink>}
                    {flags.workCompleted && <Check className="check"/>}
                </li>
                <li>
                    {flags.workCompleted && <NavLink
                        to="/CV/aptitudes"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Aptitudes
                    </NavLink>}
                    {flags.aptitudCompleted && <Check className="check"/>}
                </li>
                <li>
                    {flags.aptitudCompleted && <NavLink
                        to="/CV/recommendation"
                        className="sidebar-item"
                        activeStyle={{ color: '#f1f1f1' }}
                    >
                        Recommendation
                     </NavLink>}
                     {flags.recomCompleted && <Check className="check"/>}
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Sidebar);