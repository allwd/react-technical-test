import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import UserInfo from "./UserInfo";
import MenuItem from "./MenuItem";
import {library} from "@fortawesome/fontawesome-svg-core";

const AnimationWrapper = styled.div`
  position: absolute;
  background: #ee5f63;
  width: calc(100% - 40px);
  transition: 0.3s;
  opacity: ${props => props.show ? '1' : '0'};
  padding: 20px 20px 130px;
`;

const Menu = ({...rest}) => (
  <AnimationWrapper {...rest}>
    <UserInfo/>
    <div>
      <MenuItem icon={"user-circle"}>
        Profile
      </MenuItem>
      <MenuItem icon={"plane"} style={{
        transform: 'rotate(-45deg)'
      }}>
        My Bookings
      </MenuItem>
      <MenuItem icon={"credit-card"}>
        My Payments
      </MenuItem>
      <MenuItem icon={"life-ring"}>
        Support
      </MenuItem>
      <MenuItem icon={"phone"} style={{
        transform: 'scaleX(-1)'
      }}>
        Contact Us
      </MenuItem>
      <MenuItem icon={"sign-out-alt"}>
        Log Out
      </MenuItem>
      <MenuItem icon={"question-circle"}>
        About
      </MenuItem>
      <MenuItem icon={"info-circle"}>
        FAQ
      </MenuItem>
    </div>
  </AnimationWrapper>
);

Menu.propTypes = {
  show: PropTypes.bool
};

export default Menu;