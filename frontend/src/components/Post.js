import React, { Component } from "react";

class Post extends Component {
  static defaultProps = {
    category: "",
    title: "",
    author: "",
    body: "",
    voteScore: 0
  };
  render() {
    const { category, title, author, body, voteScore, time } = this.props;
    return (
      <div>
        <div>
          <p>{title}</p>
          Edit
        </div>
        <div>{`post by ${author}`}</div>
        <span>{category}</span>
        <span>{`Vote ${voteScore}`}</span>
        <p>{body}</p>
        <div>{time}</div>
        <div>
          Comment
          <button />
          <button />
        </div>
      </div>
    );
  }
}

export default Post;
