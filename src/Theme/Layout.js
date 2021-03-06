import React from 'react'
import styled from 'styled-components'
import Menu from '../Components/Menu/Menu'
import Header from '../Components/Header'
import { default as ButtonComponent } from '../Components/Button'
import Footer from '../Components/Footer'
import { useAuth } from '../Context/Auth'

const Wrapper = styled.div``

const Content = styled.div`
  padding: 20px;
  text-align: center;
`

const Button = styled(ButtonComponent)`
  border: 1px solid white;
  width: 100px;
  margin: 55px auto 0;
  padding: 15px;
  font-size: 25px;
  font-weight: bold;
`

const Layout = () => {
  const [show, toggleMenu] = React.useState(false)
  const { isAuthenticated, login } = useAuth()

  return (
    <Wrapper>
      <Header menu={show} onClick={() => toggleMenu(!show)} />
      {isAuthenticated ? (
        <>
          <Menu show={show} />
          <Content>
            <h1>Some content</h1>
            <img src={'https://unsplash.it/200/200'} alt={'content'} />
          </Content>
        </>
      ) : (
        <Content>
          <Button onClick={() => login('DominikBiel@mail.com')}>Login</Button>
        </Content>
      )}
      <Footer />
    </Wrapper>
  )
}

export default Layout
