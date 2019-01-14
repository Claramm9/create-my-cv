import React, { Component } from 'react';
import Home from '../Home/index';
import Header from '../CV/components/Header/index';
import CV from '../CV/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <Header />
            <Home />
            <Route path="/CV" component={CV} />
        </div>
    </Router>
);

export default App;