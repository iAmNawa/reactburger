import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';


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
                   <li><NavLink to={{
                       pathname: '/courses/',
                     }}>Courses</NavLink></li>
                  </ul>
                 </nav>
              </header>
              <Route path="/courses" />
              <Route path="/users" />
            </div>
        );
    }
}

export default Header;
