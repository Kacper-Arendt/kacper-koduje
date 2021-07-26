import styled from 'styled-components';

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  width: 100vw;
  font-size: 2.5rem;
  padding: 1rem;
  background-color: red;
`

export const Nav = () => {
    return (
        <Navigation>
            Nav
        </Navigation>
    )
}