import './styles.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import Header from '../../components/Header/index';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <button className="button-start"><Link to="/CV">START</Link></button>
            </div>
        );
    }
};

export default Home;