import styled, {keyframes} from "styled-components";
import logo from '../images/logo.svg'

const showLogo = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const StyledHeader = styled.div`
  grid-column: start / end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`
const H1 = styled.h1`
    font-size: 8rem;
    color: white;

  :first-of-type {
    margin-top: 5rem;

    :first-letter {
      color: #016128;
    }
  }

  :last-of-type {
    :first-letter {
      color: #e0ba22;
    }
  }
`

const LogoContainer = styled.div`
  width: 30rem;
  height: 30rem;
  position: sticky;
  box-shadow: 0 20px 35px rgba(0, 0, 0, .3);
  border-radius: .5rem;
  animation: ${showLogo} ease-out 2s;
  overflow: hidden;

  :before {
    content: '';
    background-image: repeating-conic-gradient(red 10%, #4AAE9B 20%);
    //background-image: conic-gradient(#f06, rgba(0, 0, 0, .5)), conic-gradient(silver 25%, #eee 0 50%, silver 0 75%, #eee 0);
    height: 150%;
    width: 150%;
    position: absolute;
    left: -25%;
    top: -25%;
    animation: ${rotate} 3.5s infinite linear;
  }

  :after {
    content: "";
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: 12rem;
    background-position: center;
    height: 96%;
    width: 96%;
    position: absolute;
    background-color: #1c1b29;
    border-radius: .5rem;
    top: 2%;
    left: 2%;
  }

`

export const Header = () => {
    return (
        <StyledHeader id='header'>
            <LogoContainer/>
            <H1>Kacper</H1>
            <H1>Koduje</H1>
        </StyledHeader>
    )
}