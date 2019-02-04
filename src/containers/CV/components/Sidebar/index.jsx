import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles.css';
import Check from '../Check/index.jsx';
import NavigationLink from '../NavLink/index.jsx';

const Sidebar = ({ flags }) => (
    
  <div className="sidenav">
    <ul>
      <li>
        <NavigationLink
          path="/CV/personal-information"
          title="Personal Information"
          flag={ true }
        >
        </NavigationLink>
        {flags.infoCompleted && <Check className="check" />}
      </li>
      <li>
        <NavigationLink
          path="/CV/education"
          title="Education"
          flag={ flags.infoCompleted }
        >
        </NavigationLink>
        {flags.eduCompleted && <Check className="check" />}
      </li>
      <li>
        <NavigationLink
          path="/CV/work-experience"
          title="Work Experience"
          flag={ flags.eduCompleted }
        >
        </NavigationLink>
        {flags.workCompleted && <Check className="check" />}
      </li>
      <li>
        <NavigationLink
          path="/CV/aptitudes"
          title="Aptitudes"
          flag={ flags.workCompleted }
        >
        </NavigationLink>
        {flags.aptitudCompleted && <Check className="check" />}
      </li>
      <li>
        <NavigationLink
          path="/CV/recommendation"
          title="Recommendation"
          flag={ true }
        >
        </NavigationLink>
        {flags.recomCompleted && <Check className="check" />}
      </li>
    </ul>
  </div>
);

export default withRouter(Sidebar);