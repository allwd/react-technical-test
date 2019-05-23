import React from 'react'
import Avatar from './Avatar'
import styled from 'styled-components'
import { devices } from '../Theme/devices'
import { useAuth } from '../Context/Auth'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  text-align: center;
  @media (min-width: ${devices.tablet}) {
    font-size: 19px;
    flex-direction: row;
    text-align: left;
    border-bottom: 1px solid #f0868d;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
`

const Info = styled.div`
  margin: 10px 0 30px;
  @media (min-width: ${devices.tablet}) {
    margin: 0 0 0 15px;
  }
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  @media (min-width: ${devices.tablet}) {
    font-weight: bold;
    font-size: unset;
    flex-direction: row-reverse;
  }
`

const Span = styled.span`
  font-size: 30px;
  @media (min-width: ${devices.tablet}) {
    font-size: 19px;
    font-weight: bold;
  }
  &:nth-child(1n) {
    display: none;
    @media (min-width: ${devices.tablet}) {
      display: inline-block;
    }
  }
  &:first-child {
    display: inline-block;
  }
`

const BalanceSpan = styled.span`
  @media (min-width: ${devices.tablet}) {
    display: none;
  }
`

const Price = styled.div`
  @media (min-width: ${devices.tablet}) {
    font-weight: bold;
    &::after {
      content: ' ';
      white-space: pre;
    }
  }
`

const UserInfo = () => {
  const { data } = useAuth()

  return (
    <Wrapper>
      <Avatar />
      <Info>
        <div>
          {data.name.split(' ').map((item, index) => (
            <Span key={index}>
              {index > 0 && '\u00a0'}
              {item}
            </Span>
          ))}
        </div>
        <Data>
          <div>
            Available<BalanceSpan>&nbsp;Balance</BalanceSpan>
          </div>
          <Price>{data.balance}</Price>
        </Data>
      </Info>
    </Wrapper>
  )
}

export default UserInfo
