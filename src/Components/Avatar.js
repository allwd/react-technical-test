import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const ImageWrapper = styled.div`
  border-radius: 50%;
  border: 3px solid white;
  background: #ee5f63;
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
`

const Image = styled.img`
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: 50%;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background: white;
`

const Avatar = () => {
  return (
    <ImageWrapper>
      <Image src={logo} />
    </ImageWrapper>
  );
};

export default Avatar;