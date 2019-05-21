import React from 'react';
import UserInfo from "../UserInfo";
import MenuItem from "./MenuItem";

const MobileMenu = () => (
  <>
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
  </>
);

export default MobileMenu;