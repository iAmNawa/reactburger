import React, { Component } from 'react';
//import axios from 'axios';
import { Route } from 'react-router-dom';

import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import './Blog.css';
import Posts from '../Posts/Posts';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
              <header>
               <nav>
                <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/">New Post</a></li>
                </ul>
               </nav>
              </header>
             <Route path="/" exact render={() => <h1>Home</h1>} />
            </div>
        );
    }
}

export default Blog;
