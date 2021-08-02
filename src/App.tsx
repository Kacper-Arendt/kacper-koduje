import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import {AboutMe, Skills, Contact, Footer, Header, Projects} from "./components/Componets";
import {Menu} from './components/UI/Menu';
import {device} from './Models/MediaQueries';

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

  @media${device.tablet} {
    font-size: 71.25%;
  } @media${device.laptop} {
    font-size: 81.25%;
  } @media${device.desktop} {
    font-size: 91.25%;
  }
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
            <Menu/>
            <Wrapper>
                <Header/>
                <AboutMe/>
                <Skills/>
                {/*<Projects/>*/}
                <Contact/>
                <Footer/>
            </Wrapper>
        </>
    )
}