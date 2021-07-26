import styled from "styled-components"

const StyledHeader = styled.div`
  grid-column: start / end;
`

export const Header = () => {
    return (
        <StyledHeader id='header'>
            Header
        </StyledHeader>
    )
}