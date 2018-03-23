import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Course extends Component {
    render () {
        return (
            <div>
              <header>
                 <nav>
                  <ul>
                   <li><NavLink
                     to="/posts/"
                     exact
                     activeClassName="my-active"
                     activeStyle={{
                       color: '#fa923f',
                       textDecoration: 'underline'
                     }}>Posts</NavLink></li>
                   <li><NavLink to={{
                       pathname: '/new-post',
                       hash: '#submit',
                       search: '?quick-submit=true'
                     }}>New Post</NavLink></li>
                  </ul>
                 </nav>
              </header>
            </div>
        );
    }
}

export default Course;
