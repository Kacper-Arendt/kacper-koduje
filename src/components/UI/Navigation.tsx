import styled from 'styled-components';
import {device} from '../../Models/MediaQueries';
import {Link} from "react-scroll";

interface IProps {
    isOpen: boolean,
}

export const Nav = styled.nav<IProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 35%;
  width: 100%;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, .85);
  text-align: center;
  padding: 2rem;
  transition: transform 0.3s ease-in-out;
  transform: ${(props: IProps) => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  font-size: 2rem;

@media${device.tablet} {
  font-size: 2.5rem;
}
`

const StyledLink = styled(Link).attrs(() => ({
    activeClass: 'active'
}))`
  padding: 1rem;
  margin: 0 .5rem;
  cursor: pointer;
  transition: all .3s;

  :hover {
    color: green;
  }

  &.active {
    color: orange;
  }
`

interface MenuIProps {
    isOpen: boolean,
    setIsOpen: () => void,
}

export const Navigation = (props: MenuIProps) => {

    return (
        <Nav isOpen={props.isOpen}>
            <StyledLink to='header' smooth='easeOutCubic' spy={true} delay={500}
                        onClick={props.setIsOpen}>Początek</StyledLink>
            <StyledLink to='aboutMe' smooth='easeOutCubic' spy={true} delay={500} onClick={props.setIsOpen}>O
                mnie</StyledLink>
            <StyledLink to='skills' smooth='easeOutCubic' spy={true} delay={500}
                        onClick={props.setIsOpen}>Umiejętności</StyledLink>
            <StyledLink to='projects' smooth='easeOutCubic' spy={true} delay={500}
                        onClick={props.setIsOpen}>Projekty</StyledLink>
            <StyledLink to='contact' smooth='easeOutCubic' spy={true} delay={500}
                        onClick={props.setIsOpen}>Kontakt</StyledLink>
        </Nav>

    )
}