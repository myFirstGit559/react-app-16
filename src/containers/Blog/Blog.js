import React, { Component } from 'react';

import Posts from '../Posts/Posts';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Posts">
                    <nav>
                      <ul>
                        <li><NavLink to="/posts" exact>Home</NavLink></li>
                        <li><NavLink to={{
                          pathname: "/new-post",
                          hash: "#submit",
                          search: "?quick-submit=true"
                        }}>New Post</NavLink></li>
                        {/*<li><Link to="/">Home</Link></li>
                        <li><Link to={{
                          pathname: "/new-post",
                          hash: "#submit",
                          search: "?quick-submit=true"
                        }}>New Post</Link></li>*/}
                      </ul>
                    </nav>
                </header>
                <Route path="/posts" component={Posts} />
                <Switch>
                   <Route path="/new-post" component={NewPost} />
                   <Redirect from="/" to="/posts" />
                   {/*<Route path="/:id" exact component={FullPost} />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;
