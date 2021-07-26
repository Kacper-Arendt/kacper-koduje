import styled from "styled-components"

const StyledHeader = styled.div`
  grid-column: start / end;
  grid-row: 2 / 3;
  background-color: darkred;
`

export const Header = () => {
    return (
        <StyledHeader>
            Header
        </StyledHeader>
    )
}