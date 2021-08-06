import styled, {keyframes} from "styled-components";
import {logo, bikepacking} from '../images/Images'
import {StyledWrapper} from "./UI/Wrapper";
import {device} from "../Models/MediaQueries";

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

const StyledHeader = styled(StyledWrapper)`
  height: 90vh;
  justify-content: center;
  background-image: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(77, 77, 77, .3)), url(${bikepacking});

@media${device.tablet} {
  margin-top: 5rem;
}
`

const LogoContainer = styled.div`
  width: 20rem;
  height: 20rem;
  position: sticky;
  box-shadow: 0 20px 35px rgba(0, 0, 0, .3);
  border-radius: .5rem;
  animation: ${showLogo} ease-out 2s;
  overflow: hidden;

  :before {
    content: '';
    background-image: conic-gradient(#016128, #e0ba22);
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
    background-size: 7rem;
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
const H1 = styled.h1`
  font-size: 6rem;
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


export const Header = () => {
    return (
        <StyledHeader id='header'>
            <LogoContainer/>
            <H1>Kacper</H1>
            <H1>Koduje</H1>
        </StyledHeader>
    )
}