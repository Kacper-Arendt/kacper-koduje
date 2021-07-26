import styled from 'styled-components';

const Navigation = styled.nav`
  grid-column: start / end;
  grid-row: 1 / 2;
  background-color: red;
`

export const Nav = () => {
    return (
        <Navigation>
            Nav
        </Navigation>
    )
}