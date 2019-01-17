import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CV from '../CV/index.jsx';
import Home from '../Home/index.jsx';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/CV" component={CV} />
        </Switch>
    </Router>
);

export default App;