import React from 'react';
import styled from 'styled-components';
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons'
import Footer from "./Components/Footer";

library.add(faTimes, faBars);

const Wrapper = styled.div`
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
`;

const App = () => {
  const [show, toggleMenu] = React.useState(true);

  return (
    <Wrapper>
      <Header menu={show} onClick={() => toggleMenu(!show)}/>
      <Menu show={show}/>
      <Content>
        <h1>
          Some content
        </h1>
        <img src={"https://unsplash.it/200/200"}/>
      </Content>
      <Footer/>
    </Wrapper>
  );
};

export default App;
