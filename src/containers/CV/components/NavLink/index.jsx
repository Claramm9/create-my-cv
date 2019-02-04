import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavigationLink extends Component {
    static propTypes = {
      flag: PropTypes.bool.isRequired,
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }

    constructor(props) {
      super(props);
        
      this.state = {
        isHovered: props.flag
      };
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.flag !== nextProps.flag) {
        this.setState({ isHovered: nextProps.flag });
      }
      this.forceUpdate();
    }

    handleClick = (e, flag) => {
      if (!flag) {
        e.preventDefault();
        alert('You have to complete the previous forms');
      }
    }

    render() {
      // const style = this.props.flag ? { hover: '#f1f1f1' } : { hover: '#818181' }
      const myClass = this.state.isHovered ? 'sidebar-item' : 'sidebar-no-hover';
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