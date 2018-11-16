import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import image from '../../img/default-user.png';

const ThumbnailContainer = styled(Link)``;
const Thumbnail = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border: none;
  background-image: url(${image});
  background-size: cover;
`;
const HeaderUserThumbnail = ({onClickHandler = () => {}}) => (
  <Thumbnail image={image} />
);

export default HeaderUserThumbnail;
