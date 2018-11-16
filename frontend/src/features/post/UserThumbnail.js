import React from 'react';
import styled from 'styled-components';
import image from '../../img/default-user.png';

const Thumbnail = styled.div`
  border-radius: 50%;
  z-index: 5;
  position: absolute;
  top: 14rem;
  right: 0.5rem;
  width: 3.7rem;
  height: 3.7rem;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  background-image: url(${image});
  background-size: cover;
  @media screen and (max-width: 650px) {
    top: 17.5rem;
    width: 4.5rem;
    height: 4.5rem;
  }
`;
const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
const UserThumbnail = () => <Thumbnail image={image} />;

export default UserThumbnail;
