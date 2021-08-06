import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  margin-top: auto;
  padding: 2.5rem;
  background-color: #1F3A60;
  white-space: nowrap;
  
  p{
    margin: .7rem 0;
    color:  #C5C5C5;
  }
`

const Contact = styled.div`
  p:first-child{
    color: white;
    font-weight: bold;
  }
`

const Social = styled.div`
  p {
    :first-of-type{
      font-weight: bold;
      color: white;
    }
  }

  a {
    text-decoration: none;
    color: white;
    transition: all .3s;
    :hover {
      color: orange;
  }
  }
`

const Copyright = styled.p`
    flex: 1 100%;
    text-align: start;
`

const Line = styled.div`
  width: 100%;
  height: .2rem;
  margin: 1rem 0;
  border-bottom: 1px solid #C5C5C5;
`
export const Footer = () => {
    return (
        <StyledFooter>
            <Contact>
                <p>Kacper Arendt</p>
                <p>arendtkacper@gmail.com</p>
                <p>721-446-865</p>
                <p>Warsaw</p>
            </Contact>
            <Social>
                <p>Find Me</p>
                <a href="https://github.com/kacykvaa" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            </Social>
            <Line />
            <Copyright>KacperKoduje.pl &copy; 2021</Copyright>
        </StyledFooter>
    )
}