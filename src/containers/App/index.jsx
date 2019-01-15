import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CV from '../CV/index';
import Home from '../Home/index';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/CV" component={CV} />
        </Switch>
    </Router>
);

export default App;