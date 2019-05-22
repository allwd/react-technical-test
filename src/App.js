import React from 'react';
import styled from 'styled-components';
import Header from "./Components/Header";
import Menu from "./Components/Menu/Menu";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTimes, faBars, faUserCircle, faPlane, faCreditCard, faLifeRing, faPhone, faSignOutAlt, faQuestionCircle, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import Footer from "./Components/Footer";


library.add(faTimes, faBars, faUserCircle, faPlane, faCreditCard, faLifeRing, faPhone, faSignOutAlt, faQuestionCircle, faInfoCircle);

const Wrapper = styled.div`
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
`;

const App = () => {
  const [show, toggleMenu] = React.useState(false);

  return (
    <Wrapper>
      <Header menu={show} onClick={() => toggleMenu(!show)}/>
      <Menu show={show}/>
      <Content>
        <h1>
          Some content
        </h1>
        <img src={"https://unsplash.it/200/200"} alt={'content'}/>
      </Content>
      <Footer/>
    </Wrapper>
  );
};

export default App;
