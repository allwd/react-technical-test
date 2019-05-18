import React from 'react';
import Avatar from './Avatar';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  text-align: center;
`

const Info = styled.div`
  margin-top: 10px;
  //margin-left: 20px; // for desktop
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
`

const Span = styled.span`
    font-size: 30px;
  &:nth-child(1n) {
    display: none;
  }
  &:first-child {
    display: inline-block;
  }
`

const BalanceSpan = styled.span`
  //display: none;
`

const UserInfo = () => {
  return (
    <Wrapper>
      <Avatar/>
      <Info>
        <div>
          <Span>Dominik</Span>
          <Span> Biel</Span>
          <Span> Biel</Span>
        </div>
        <Data>
          <div>
            Available<BalanceSpan>&nbsp;Balance</BalanceSpan>
          </div>
          <div>
            £1,500.00
          </div>
        </Data>
      </Info>
    </Wrapper>
  );
};

export default UserInfo;