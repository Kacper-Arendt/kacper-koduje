import styled from "styled-components"

const Div = styled.div`
  grid-column: start / end;
  background-color: orange;
`

export const Projects = () => {
    return (
        <Div id='projects'>
            Projects
        </Div>
    )
}