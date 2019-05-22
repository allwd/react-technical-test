import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import { devices } from '../../Theme/devices'

const Wrapper = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  & + & {
    border-top: 1px solid #f0868d;
    padding-top: 20px;
  }

  @media (min-width: ${devices.tablet}) {
    font-size: 23px;
    font-weight: bold;
    padding-bottom: 3px;
    & + & {
      padding-top: 3px;
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
