import React, { Component } from "react";
import styled from "styled-components";
import Post from "./Post";
import { data } from "./dummy";

class Posts extends Component {
  renderPosts = () => (
    <div className="post-container">
      {data.map(post => (
        <ui>
          <li>{post.title}</li>
          <p>{post.body}</p>
          <li>{post.author}</li>
          <li>{post.date}</li>
        </ui>
      ))}
    </div>
  );
  render() {
    return <PostsContainer>{this.renderPosts()}</PostsContainer>;
  }
}

export default Posts;

const PostsContainer = styled.div`
  width: 100%;
  height: 100%;

  .post-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  ui {
    display: flex;
    width: 30rem;
    min-height: 20rem;
    font-size: 2rem;
    border: 0.1rem solid white;
    list-style: none;
  }
`;
