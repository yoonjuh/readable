import React from "react";
import Styled from "styled-components";
import SubmitBtn from "./SubmitBtn";

const CommentForm = () => {
  return (
    <Form>
      <label>Comment</label>
      <input type="text" name="comment" placeholder="Enter Comments" />
      <label>Author</label>
      <input type="text" name="author" placeholder="Enter Author" />
      <SubmitBtn onClick={() => console.log("worked")} />
    </Form>
  );
};

export default CommentForm;

const Form = Styled.div`
  display: flex;
  flex-direction: column;
`;
