import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import {devices} from "../Theme/devices";


const ImageWrapper = styled.div`
  border-radius: 50%;
  background: #ee5f63;
  position: relative;
  overflow: hidden;
  width: 70px;
  height: 70px;

  @media (min-width: ${devices.tablet}) {
    border: 3px solid white;
    width: 45px;
    height: 45px;
  }
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
      <Image src={logo}/>
    </ImageWrapper>
  );
};

export default Avatar;