import React, { Component } from 'react';
import axios from '../../axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          content: '',
          author: 'Max',
          authorized: true
      }
    }

    componentDidMount() {
      console.log('props from [NewPost.js]: ', this.props);

    }

    postDataHandler = () => {
      const post = {
        title: this.state.title,
        body: this.state.content,
        author: this.state.author
      }
      axios.post('/', post)
        .then(response => {
          console.log(response, this.props.history);

          this.props.history.replaсe('/posts');

        });
    }

    render () {
        let redirect = null;
        if(!this.state.authorized) {
          redirect = <Redirect to="/posts" />;
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
