import styled from "styled-components"

const StyledFooter = styled.footer`
  grid-column: start / end;
  grid-row: 7 / -1;
  background-color: orangered;
`

export const Footer = () => {
    return (
        <StyledFooter>
            Footer
        </StyledFooter>
    )
}