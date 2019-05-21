import React from 'react';
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import {devices} from "../Theme/devices";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  padding: 27px 20px;
  position: relative;
  
  &::after {
    content: '';
    width: calc(100% - 40px);
    height: 1px;
    bottom: 0;
    background: #f0868d;
    position: absolute;
    
    @media (min-width: ${devices.tablet}) {
      background: white;
      height: 2px;
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  display: ${props => props.display};
  cursor: pointer;
`;

const CloseIconWrapper = styled.button`
  background: none;
  border: none;
  color: white;
  position: absolute;
  right: 20px;
  font-size: 22px;
`;

const Header = ({menu, onClick}) => (
  <div>
    <Wrapper>
      <div>company/</div>
      <CloseIconWrapper {...{onClick}}>
        <Icon display={menu ? 'block' : 'none'} icon={"times"}/>
        <Icon display={menu ? 'none' : 'block'} icon={"bars"}/>
      </CloseIconWrapper>
    </Wrapper>
  </div>
);

Header.propTypes = {
  menu: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

Header.defaultProps = {
  menu: false
};


export default Header;