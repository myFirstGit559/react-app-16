import React, { Component } from 'react';
import axios from '../../axios';

import './FullPost.css';

class FullPost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        post: null
      }
    }

    componentDidUpdate() {
      if (this.props.id) {
        if (!this.state.post || (this.state.post && this.state.post.id !== this.props.id)) {
          axios.get(`/${this.props.id}`)
            .then(response => {
              const post = {
                ...response.data,
                author: 'Tanya'
              };
              //console.log('post: ',post)
              this.setState({post: post});
            })
        }
      }
    }

    deletePostHandler = (id) => {
      axios.delete(`/${this.props.id}`)
        .then(response => {
          console.log('response: ', response);
        })
    }

    render () {
      let post = (
        <div className="FullPost">
          <p>Please select a Post!</p>
        </div>);
      if (this.props.id) {
        post = (
          <div className="FullPost">
            <p>Loading...</p>
          </div>);
      }
      if (this.state.post) {
        post = (
          <div className="FullPost">
            <h1>{this.state.post.title}</h1>
            <p>{this.state.post.body}</p>
            <div className="Edit">
              <button onClick={() => this.deletePostHandler(this.state.post.id)} className="Delete">Delete</button>
            </div>
          </div>
        )
      }
      return post;
    }
}

export default FullPost;
