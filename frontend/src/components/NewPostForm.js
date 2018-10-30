import React, { Component } from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { compose, withState, withHandlers } from "recompose";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router";
import FormCategory from "./FormCategory";
import FormCatBtnContainer from "./FormCatBtnContainer";
import { ADD_POST } from "../documents/mutation/post";
import { GET_ALL_POST } from "../documents/query/post";
import uuid from "uuid";

const FormContainer = Styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 95%;
  margin-top: 3rem;
`;

const CategoryLabel = Styled.label`
  flex: 1;
  font-size: 1.7rem;
`;
const Label = Styled.label`
   margin-top: 1rem;
   display: flex;
   flex-direction: column;
   font-size: 1.7rem;
`;

const Group = Styled.div`
  flex: 1;
`;
const Button = Styled.button`
  width: 100%;
  background-color: blue;
  color: white;
  height: 3rem;
`;

const NewPostForm = ({
  currentCat,
  title,
  body,
  author,
  onCategoryChange,
  onTitleChange,
  onBodyChange,
  onAuthorChange,
  categories,
  match,
  history,
  location
}) => (
  <Mutation
    mutation={ADD_POST}
    update={(cache, { data }) => {
      const origin = cache.readQuery({ query: GET_ALL_POST });
      const newPost = {
        id: uuid(),
        category: currentCat,
        title,
        body,
        author,
        createdAt: new Date(),
        updatedAt: new Date(),
        voteScore: 0,
        deleted: false,
        __typename: "Post"
      };
      cache.writeQuery({
        query: GET_ALL_POST,
        data: { posts: [...origin.posts, newPost] }
      });
    }}
  >
    {(addPost, { data }) => (
      <FormContainer
        onSubmit={e => {
          e.preventDefault();
          addPost({
            variables: {
              category: currentCat,
              title,
              body,
              author
            }
          });
          history.push("/");
        }}
      >
        <Group>
          <CategoryLabel htmlFor="categories">
            {"Category"}
            <FormCatBtnContainer
              id="categories"
              categories={categories}
              currentCat={currentCat}
              onClick={onCategoryChange}
            />
          </CategoryLabel>
        </Group>
        <Group>
          <Label htmlFor="title">
            {"Title "}
            <input
              style={{ height: "3rem" }}
              name="title"
              type="text"
              id="title"
              value={title}
              onChange={onTitleChange}
            />
          </Label>
        </Group>
        <Group>
          <Label htmlFor="content">
            {"Content "}
            <textarea
              style={{ height: "10rem" }}
              type="text"
              id="content"
              name="content"
              value={body}
              onChange={onBodyChange}
            />
          </Label>
        </Group>
        <Group>
          <Label>
            {"Author "}
            <input
              style={{ height: "3rem" }}
              name="author"
              type="text"
              id="author"
              value={author}
              onChange={onAuthorChange}
            />
          </Label>
        </Group>
        <div style={{ marginTop: "2rem" }}>
          <Button type="submit">Submit</Button>
        </div>
      </FormContainer>
    )}
  </Mutation>
);

const EnhancedNewPostForm = compose(
  withState("currentCat", "setCat", "react"),
  withState("title", "setTitle", ""),
  withState("body", "setBody", ""),
  withState("author", "setAuthor", ""),
  withHandlers({
    onCategoryChange: ({ setCat }) => newCat => {
      setCat(newCat);
    },
    onTitleChange: ({ setTitle }) => e => {
      setTitle(e.target.value);
    },
    onBodyChange: ({ setBody }) => e => {
      setBody(e.target.value);
    },
    onAuthorChange: ({ setAuthor }) => e => {
      setAuthor(e.target.value);
    }
  })
)(withRouter(NewPostForm));

export default EnhancedNewPostForm;

NewPostForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};
