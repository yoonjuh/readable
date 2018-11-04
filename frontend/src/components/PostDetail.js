import React from "react";
import Posts from "./Posts";
import Styled from "styled-components";
import CommentForm from "./CommentForm";

const PostDetail = ({ posts }) => {
  return (
    <DetailContainer>
      <Posts posts={posts} renderFrom="detail" />
      <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
      <CommentForm />
    </DetailContainer>
  );
};

export default PostDetail;

const DetailContainer = Styled.div`
  max-width: 90%;
  min-width: 90%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
