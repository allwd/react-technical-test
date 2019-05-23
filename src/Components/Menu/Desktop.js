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
    label: 'About Us',
    to: '/'
  },
  {
    label: 'FAQ',
    to: '/'
  },
  {
    label: 'Support',
    to: '/'
  },
  {
    label: 'Contact Us',
    to: '/'
  }
]

const itemsCenter = [
  {
    label: 'Profile',
    to: '/'
  },
  {
    label: 'My Bookings',
    to: '/'
  },
  {
    label: 'My Payments',
    to: '/'
  },
  {
    label: 'Log Out',
    to: '/'
  },
  {
    label: 'Resume Application',
    to: '/'
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
      {itemsCenter.map(({label, ...rest}, index) => ( // TODO: Add react-router
        <MenuItem key={index} {...rest}>{label}</MenuItem>
      ))}
    </Center>
  </>
)

export default DesktopMenu
