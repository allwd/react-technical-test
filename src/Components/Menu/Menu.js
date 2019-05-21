import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {devices} from "../../Theme/devices";
import MobileMenu from "./Mobile";
import MediaQuery from 'react-responsive'
import DesktopMenu from "./Desktop";

const AnimationWrapper = styled.div`
  position: absolute;
  background: #ee5f63;
  width: calc(100% - 40px);
  transition: 0.3s;
  opacity: ${props => props.show ? '1' : '0'};
  padding: 20px 20px 130px;
  
  @media (min-width: ${devices.tablet}) {
    padding: 20px;
    box-shadow: 0px 10px 5px 0px rgba(238,95,99,1); 
  }
`;

const Menu = ({...rest}) => (
  <AnimationWrapper {...rest}>
    <MediaQuery query={`(min-width: ${devices.tablet})`}>
      {matches => matches ? <DesktopMenu/> : <MobileMenu/>}
    </MediaQuery>
  </AnimationWrapper>
);

Menu.propTypes = {
  show: PropTypes.bool
};

export default Menu;