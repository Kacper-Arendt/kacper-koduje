import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  height: 7rem;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, .5);
  text-align: center;
  font-size: 1.8rem;

  p {
    padding: 0 3rem;
  }

  a {
    text-decoration: none;
    color: orange;
  }
`

export const Footer = () => {
    return (
        <StyledFooter>
            <p>KacperKoduje.pl &copy; 2021</p>
            <p>
                Ikonki wykonane przez
                <a href="https://www.freepik.com" title="Freepik"> Freepik </a>
                |
                <a href="https://www.flaticon.com/" title="Flaticon"> flaticon</a>
            </p>
        </StyledFooter>
    )
}