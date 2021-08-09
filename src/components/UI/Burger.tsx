import React from 'react';
import styled, {keyframes} from 'styled-components';
import {device} from '../../Models/MediaQueries';

const moveFromTop = keyframes`
  0% {
    transform: translateY(-20rem);
  }
  80%{
    transform: translateY(1rem);
  }
  100% {
    transform: translateY(0) ;
  }
`

export const Burger = styled.button<MenuIProps>`
  position: fixed;
  top: 5%;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3.5rem;
  height: 3.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;
  animation: ${moveFromTop} 1s;

  &:focus {
    outline: none;
  }

  div {
    width: 3.5rem;
    height: .35rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: orange;
    
    :first-child {
      transform: ${(props: MenuIProps) => props.isOpen ? 'rotate(45deg) ' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${(props: MenuIProps) => props.isOpen ? '0' : '1'};
      transform: ${(props: MenuIProps) => props.isOpen ? 'translateX(-20px) ' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${(props: MenuIProps) => props.isOpen ? 'rotate(-45deg) ' : 'rotate(0)'};
    }
  }

@media${device.mobileM} {
  width: 4rem;
  height: 4rem;

  div {
    width: 4rem;
    height: .4rem;
  }
} @media${device.tablet} {
  width: 4.5rem;
  height: 4.5rem;

  div {
    width: 4.5rem;
    height: .45rem;
  }
} @media${device.laptop} {
  display: none;
}
`;

export interface MenuIProps {
    isOpen: boolean,
    setIsOpen?: () => void,
}

export const BurgerEl = (props: MenuIProps) => {
    return (
        <Burger isOpen={props.isOpen} onClick={props.setIsOpen}>
            <div></div>
            <div></div>
            <div></div>
        </Burger>
    )
}