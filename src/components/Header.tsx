import styled from "styled-components"

const StyledHeader = styled.div`
  grid-column: start / end;
  background-color: darkred;
`

export const Header = () => {
    return (
        <StyledHeader>
            Header
        </StyledHeader>
    )
}