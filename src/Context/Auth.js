import React, { useState } from 'react'

const AuthContext = React.createContext({})

const testUser = {
  name: 'Dominik Biel',
  balance: '£1,500.00',
  avatar: process.env.PUBLIC_URL + '/avatar.png'
}

export const AuthProvider = ({ ...rest }) => {
  const [data, setData] = useState({})
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [isFetching, setFetching] = useState(false)

  const login = data => {
    if (data === 'DominikBiel@mail.com') {
      setFetching(true)
      setTimeout(() => {
        setData(testUser)
        setFetching(false)
        setAuthenticated(true)
      }, 300)
    }
  }

  return <AuthContext.Provider value={{ data, isAuthenticated, login, isFetching }} {...rest} />
}

export const useAuth = () => React.useContext(AuthContext)
