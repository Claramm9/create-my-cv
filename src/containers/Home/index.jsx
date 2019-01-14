import './styles.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <>
                <button className="button-start"><Link to="/CV">START</Link></button>
            </>
        );
    }
};

export default Home;