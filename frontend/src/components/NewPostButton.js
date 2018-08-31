import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NewPostButton = () => (
  <LinkContainer>
    <Link to="/post/new">
      {'New Post'}
      <Icon className="far fa-edit" />
    </Link>
  </LinkContainer>
)

export default NewPostButton

const LinkContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: white;
    background-color: #00b640;
    font-size: 1.7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a:hover {
    background-color: #28a745;
    transition-duration: 1s;
  }
`
const Icon = styled.i`
  margin-left: 0.7rem;
  margin-bottom: 0.5rem;
  font-size: 2rem;
`
