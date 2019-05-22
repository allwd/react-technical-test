import React from 'react'
import UserInfo from '../UserInfo'
import MenuItem from './MenuItem'
import styled from 'styled-components'

const Left = styled.div`
  position: absolute;
  left: 15px;
`

const Center = styled.div`
  margin: 0 auto;
  width: 300px;
`

const itemsLeft = [
  {
    label: 'About Us'
  },
  {
    label: 'FAQ'
  },
  {
    label: 'Support'
  },
  {
    label: 'Contact Us'
  }
]

const itemsCenter = [
  {
    label: 'Profile'
  },
  {
    label: 'My Bookings'
  },
  {
    label: 'My Payments'
  },
  {
    label: 'Log Out'
  },
  {
    label: 'Resume Application'
  }
]

const DesktopMenu = () => (
  <>
    <Left>
      <MenuItem>Home</MenuItem>
      <MenuItem>Flights</MenuItem>
    </Left>
    <Center>
      <UserInfo />
    </Center>
    <Left>
      {itemsLeft.map((item, index) => (
        <MenuItem key={index}>{item.label}</MenuItem>
      ))}
    </Left>
    <Center>
      {itemsCenter.map((item, index) => (
        <MenuItem key={index}>{item.label}</MenuItem>
      ))}
    </Center>
  </>
)

export default DesktopMenu
