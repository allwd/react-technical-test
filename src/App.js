import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTimes,
  faBars,
  faUserCircle,
  faPlane,
  faCreditCard,
  faLifeRing,
  faPhone,
  faSignOutAlt,
  faQuestionCircle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import { AuthProvider } from './Context/Auth'
import Layout from './Theme/Layout'

library.add(
  faTimes,
  faBars,
  faUserCircle,
  faPlane,
  faCreditCard,
  faLifeRing,
  faPhone,
  faSignOutAlt,
  faQuestionCircle,
  faInfoCircle
)

const App = () => {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  )
}

export default App
