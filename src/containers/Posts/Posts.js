import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Post from '../../components/Post/Post';
import axios from '../../axios';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: false,
      selectedPostId: null
    }
  }

  postSelectedHandler = (id) => {
    this.props.history.push({pathname: `/posts/${id}`});
    //this.setState({selectedPostId: id});
  }

  componentDidMount() {
    console.log('props of [Posts.js]: ', this.props);
    axios.get('/')
      .then(response => {
        const posts = response.data.slice(0,4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Tanya'
          }
        });
        this.setState({posts: updatedPosts});
        console.log(response)
      })
      .catch(error => {
        console.log('error: ', error);
        this.setState({error: true})
      })
  }

  render() {
    let posts = <p style={{color: 'red', textAlign: 'center'}}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post, index) => {
        return <Post
                  key={index}
                  title={post.title}
                  author={post.author}
                  clicked={() => this.postSelectedHandler(post.id)}  />
      });
    }
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path="/posts/:id" component={FullPost} />
      </div>
    )
  }
}

export default Posts;
