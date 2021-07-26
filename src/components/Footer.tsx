import styled from "styled-components"

const StyledFooter = styled.footer`
  grid-column: start / end;
  background-color: orangered;
`

export const Footer = () => {
    return (
        <StyledFooter>
            Footer
        </StyledFooter>
    )
}