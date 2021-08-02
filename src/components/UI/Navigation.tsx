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
} @media${device.laptopL} {
  flex-direction: row;
  height: 4rem;
  transform: translateY(0);
  padding: 0;
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
            <StyledLink to='aboutMe' smooth='easeOutCubic' spy={true} delay={500} onClick={props.setIsOpen}
                        offset={-60}>O
                mnie</StyledLink>
            <StyledLink to='skills' smooth='easeOutCubic' spy={true} delay={500}
                        onClick={props.setIsOpen} offset={-160}>Umiejętności</StyledLink>
            <StyledLink to='projects' smooth='easeOutCubic' spy={true} delay={500}
                        onClick={props.setIsOpen}>Projekty</StyledLink>
            <StyledLink to='contact' smooth='easeOutCubic' spy={true} delay={500}
                        onClick={props.setIsOpen}>Kontakt</StyledLink>
        </Nav>

    )
}