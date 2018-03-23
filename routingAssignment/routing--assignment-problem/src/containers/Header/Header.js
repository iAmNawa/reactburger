import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Users from '../Users/Users';
import Courses from '../Courses/Courses';
import DifferentOne from '../DifferentPaths/DifferentOne';


class Header extends Component {
    render () {
        return (
            <div>
              <header>
                 <nav>
                  <ul>
                   <li><NavLink
                     to="/users/"
                     exact
                     activeClassName="my-active"
                     activeStyle={{
                       color: '#fa923f',
                       textDecoration: 'underline'
                     }}>Users</NavLink></li>
                   <li><NavLink
                     to='/courses/'
                     activeClassName="my-active"
                     activeStyle={{
                       color: '#fa923f',
                       textDecoration: 'underline'
                     }}>Courses</NavLink></li>
                  </ul>
                 </nav>
              </header>
              <Route path="/users" component={Users} />
              <Route path="/courses" component={Courses} />
            </div>
        );
    }
}

export default Header;
