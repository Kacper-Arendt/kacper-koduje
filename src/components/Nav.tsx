import styled from 'styled-components';
import {Link} from 'react-scroll';

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  width: 100vw;
  font-size: 2.5rem;
  padding: 1rem;
  color: lightgrey;
`

export const Nav = () => {
    return (
        <Navigation>
            <Link to='header' smooth={true} delay={500}>Początek</Link>
            <Link to='aboutMe' smooth={true} delay={500}>O mnie</Link>
            <Link to='skills' smooth={true} delay={500}>Umiejętności</Link>
            <Link to='projects' smooth={true} delay={500}>Projekty</Link>
            <Link to='contact' smooth={true} delay={500}>Kontakt</Link>
        </Navigation>
    )
}