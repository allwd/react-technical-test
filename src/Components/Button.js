import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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
`

const Button = ({children, ...rest}) => {
  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  )
}

export default Button