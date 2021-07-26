import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import {Nav, AboutMe, Skills, Contact, Footer, Header, Projects} from "./components/Componets";

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
    background: linear-gradient(to right, #16222a, #3a6073);
  }

  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    letter-spacing: 1.5px;
    color: white;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 95vh) 8rem;
  grid-template-columns: 
          [start] minmax(6rem, 1fr) 
          [center-start] repeat(4, [col-start] minmax(min-content, 14rem) [col-end])
          minmax(6rem, 1fr)[end];
`

export function App() {

    return (
        <>
            <GlobalStyles/>
            <Nav/>
            <Grid>
                <Header/>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </Grid>
        </>
    )
}