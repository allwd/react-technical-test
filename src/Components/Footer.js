import React from 'react';
import styled from "styled-components";
import {devices} from "../Theme/devices";

const FixedPosition = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ee5f63;
  padding: 20px 20px;
  width: calc(100% - 40px);

`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  font-size: 32px;
  position: relative;
  min-height: 55px;
  @media (min-width: ${devices.tablet}) {
    align-items: flex-start;
    font-size: 19px;
    min-height: 90px;
  }
  
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    top: -20px;
    background: #f0868d;
    position: absolute;
  }
`;

const P = styled.div`
  text-align: center;
  display: none;
  @media (min-width: ${devices.tablet}) {
    display: block; 
  }

  
  &:first-child {
    display: block;
  }
`

const Footer = () => {
  return (
    <FixedPosition>
      <Wrapper>
        <div>
          <P>We're here to help</P>
          <P>+44 (0) 20 8050 3459</P>
          <P>support@awaymo.com</P>
        </div>
      </Wrapper>
    </FixedPosition>
  );
};

export default Footer;