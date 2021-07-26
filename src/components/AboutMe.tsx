import styled from "styled-components";

const Div = styled.div`
  grid-column: start / end;
  grid-row: 3 / 4;
  background-color: indianred;
`

export const AboutMe = () => {
    return (
        <Div>
            About Me
        </Div>
    )
}