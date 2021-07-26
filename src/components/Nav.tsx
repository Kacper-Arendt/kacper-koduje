import styled from 'styled-components';
import {Link} from 'react-scroll';

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  width: 100vw;
  padding: 1rem;
  background: grey;
  text-align: center;
  font-size: 2.5rem;
  color: lightgrey;
`
const StyledLink = styled(Link)`
  padding: 1rem;
  margin: 0 .5rem;
  transition: all .3s ease-in-out;
  cursor: pointer;
  
  :hover {
    transform: scaleX(2.1);
    color: orange;
  }
`
export const Nav = () => {
    return (
        <Navigation>
            <StyledLink to='header' smooth={true} delay={500}>Początek</StyledLink>
            <StyledLink to='aboutMe' smooth={true} delay={500}>O mnie</StyledLink>
            <StyledLink to='skills' smooth={true} delay={500}>Umiejętności</StyledLink>
            <StyledLink to='projects' smooth={true} delay={500}>Projekty</StyledLink>
            <StyledLink to='contact' smooth={true} delay={500}>Kontakt</StyledLink>
        </Navigation>
    )
}