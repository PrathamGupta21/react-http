import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }
  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h2>Post List</h2>
        {posts.length
          ? posts.map((post) => <h1 key={post.id}>{post.title}</h1>)
          : null}
        {errorMsg ? <h1>{errorMsg}</h1> : null}
      </div>
    );
  }
}

export default PostList;
