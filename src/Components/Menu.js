import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const AnimationWrapper = styled.div`
  position: absolute;
  background: #ee5f63;
  width: calc(100% - 40px);
  transition: 0.3s;
  opacity: ${props => props.show ? '1' : '0'};
  padding: 20px;
`;

const Menu = ({...rest}) => (
  <AnimationWrapper {...rest}>
    Test
  </AnimationWrapper>
);

Menu.propTypes = {
  show: PropTypes.bool
};

export default Menu;