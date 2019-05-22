import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import { devices } from '../../Theme/devices'

const Wrapper = styled.div`
  padding: 20px 5px;
  font-size: 32px;
  display: flex;
  align-items: center;
  user-select: none;
  background-position: center;
  transition: background 0.7s;
  background-color: #ee5f63;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    background: #ff6468 radial-gradient(circle, transparent 1%, #ff6468 1%) center/22000%;
  }

  &:active {
    background-color: #ee5f63;
    background-size: 100%;
    transition: background 0s;
  }

  & + & {
    border-top: 1px solid #f0868d;
  }

  @media (min-width: ${devices.tablet}) {
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 23px;
    font-weight: bold;
    & + & {
      border-top: none;
    }
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 27px;
  position: absolute;

  @media (min-width: ${devices.tablet}) {
    display: none;
  }
`

const Span = styled.span`
  padding-left: 42px;

  @media (min-width: ${devices.tablet}) {
    padding: 0;
  }
`

const MenuItem = ({ children, icon, ...rest }) => {
  return (
    <Wrapper>
      {icon && <Icon {...{ icon, ...rest }} />}
      <Span>{children}</Span>
    </Wrapper>
  )
}

export default MenuItem
