import styled from 'styled-components';
import {Link} from 'react-scroll';

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  padding: 1rem;
  background: rgba(0,0,0, .6);
  text-align: center;
  font-size: 2.5rem;
  color: lightgrey;
  z-index: 1000;
`
const StyledLink = styled(Link).attrs(() => ({
    activeClass: 'active'
}))`
  padding: 1rem;
  margin: 0 .5rem;
  cursor: pointer;
  transition: all .3s;
  
  :hover{
    color: green;
  }

  &.active {
    color: orange;
  }
`
export const Nav = () => {

    return (
        <Navigation>
            <StyledLink to='header' smooth='easeOutCubic' spy={true} delay={500} offset={-70}>Początek</StyledLink>
            <StyledLink to='aboutMe' smooth='easeOutCubic' spy={true} delay={500} offset={70}>O mnie</StyledLink>
            <StyledLink to='skills' smooth='easeOutCubic' spy={true} delay={500} offset={-80}>Umiejętności</StyledLink>
            <StyledLink to='projects' smooth='easeOutCubic' spy={true} delay={500}>Projekty</StyledLink>
            <StyledLink to='contact' smooth='easeOutCubic' spy={true} delay={500}>Kontakt</StyledLink>
        </Navigation>
    )
}