import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import { devices } from '../../Theme/devices'
import Button from '../Button'

const Wrapper = styled.div`
  font-size: 32px;

  & + & {
    border-top: 1px solid #f0868d;
    @media (min-width: ${devices.tablet}) {
      border-top: none;
    }
  }
`

const Item = styled.div`
  padding: 20px 5px;
  display: flex;
  align-items: center;

  @media (min-width: ${devices.tablet}) {
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 23px;
    font-weight: bold;
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

const MenuItem = ({ children, icon, onClick, ...rest }) => {
  return (
    <Wrapper>
      <Button onClick={onClick}>
        <Item>
          {icon && <Icon {...{ icon, ...rest }} />}
          <Span>{children}</Span>
        </Item>
      </Button>
    </Wrapper>
  )
}

export default MenuItem
