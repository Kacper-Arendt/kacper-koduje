import styled from 'styled-components';
import {device} from '../../Models/MediaQueries';
import {Link} from "react-scroll";
import {logo} from '../../images/Images';

interface IProps {
    isOpen: boolean,
}

export const Nav = styled.nav<IProps>`
  position: fixed;
  top: 0;
  height: 30%;
  width: 100%;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: rgba(0, 0, 0, .85);
  transition: transform 0.3s ease-in-out;
  transform: ${(props: IProps) => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  font-size: 1.5rem;

@media${device.tablet} {
  font-size: 2rem;
} @media${device.laptop} {
  background: #F9F7F4;
  flex-direction: row;
  height: 5rem;
  transform: translateY(0);
  padding: 0;
  color: black;
  justify-content: flex-start;
  align-items: center;
}

`

const StyledLink = styled(Link)`
  padding: .5rem;
  cursor: pointer;
  transition: all .3s;

  :hover {
    color: orange;
  }

@media${device.tablet} {
  padding: 1rem;
  font-size: 1.5rem;

  :first-of-type {
    margin-left: 2rem;
  }
}
`

const Logo = styled.div`
  display: none;
  height: 75%;
  width: 3.5rem;
  margin: 0 4rem 0 auto;
  background-color: black;

  img {
  }
}


@media${device.laptop} {
  display: flex;
  justify-content: center;
`


interface MenuIProps {
    isOpen: boolean,
    setIsOpen: () => void,
}

export const Navigation = (props: MenuIProps) => {

    return (
        <Nav isOpen={props.isOpen}>
            <StyledLink to='about' smooth='easeOutCubic' spy={true} delay={500} onClick={props.setIsOpen}
                        offset={-60}>About
            </StyledLink>
            <StyledLink to='skills' smooth='easeOutCubic' spy={true} delay={500}
                        onClick={props.setIsOpen} offset={-60}>Skills
            </StyledLink>
            <StyledLink to='projects' smooth='easeOutCubic' spy={true} delay={500}
                        onClick={props.setIsOpen}>Projects
            </StyledLink>
            <StyledLink to='contact' smooth='easeOutCubic' spy={true} delay={500}
                        onClick={props.setIsOpen}>Contact
            </StyledLink>
            <Logo>
                <img src={logo} alt=""/>
            </Logo>
        </Nav>
    )
}