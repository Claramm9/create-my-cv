import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavigationLink extends Component {
  static propTypes = {
    flag: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  handleClick = (e, flag) => {
    if (!flag) {
      e.preventDefault();
      alert('You have to complete the previous forms');
    }
  }

  render() {
    const myClass = this.props.flag ? 'sidebar-item' : 'sidebar-no-hover';
    return (
      <NavLink
        onClick={ (e) => this.handleClick(e, this.props.flag) }
        to={ this.props.path }
        className={ myClass }
        activeStyle={ { color: '#f1f1f1' } }
      >
        {this.props.title}
      </NavLink>
    );
  }
}
export default NavigationLink;