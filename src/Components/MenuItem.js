import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  & + & {
    border-top: 1px solid #f0868d;
    padding-top: 20px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  // display: none; // desktop
  font-size: 27px;
`;

const Span = styled.span`
  padding-left: 15px;
`;

const MenuItem = ({children, ...rest}) => {
  return (
    <Wrapper>
      <Icon {...rest}/>
      <Span>
        {children}
      </Span>
    </Wrapper>
  );
};

export default MenuItem;