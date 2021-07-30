import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import {Nav, AboutMe, Skills, Contact, Footer, Header, Projects} from "./components/Componets";
import { Menu } from './components/UI/Menu';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #636363, #a2ab58); 
  }

  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    letter-spacing: 1.5px;
    color: white;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export function App() {

    return (
        <>
            <GlobalStyles/>
            <Menu />
            {/*<Nav/>*/}
            <Wrapper>
                <Header/>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </Wrapper>
        </>
    )
}