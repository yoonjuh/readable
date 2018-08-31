import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Post from './Post'

const dummyTime = new Date()

const dummyPost = [
  {
    postId: 12457456345324,
    category: 'React',
    voteScore: 11,
    title: 'Something func',
    author: 'Edwin',
    contents:
      'I want to learn something fun!! -----------------------aaaaaaaaaaaaaaaaaaaaasdasdasddeaaaaaaaaaaaaaaaaasdgzxcbxcaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    time: dummyTime.toString(),
  },
  {
    postId: 12457345324,
    category: 'React',
    voteScore: -2,
    title: 'Something func',
    author: 'Edwin',
    contents: 'I want to learn something fun!!',
    time: dummyTime.toString(),
  },
]

const Posts = () => (
  <PostsContainer>
    {dummyPost.map(item => (
      <Post item={item} key={item.postId} />
    ))}
  </PostsContainer>
)

export default Posts

const PostsContainer = Styled.div`
  margin-top: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: .01rem #6c757d solid;
  /* border: 0.5rem red solid; */


`
