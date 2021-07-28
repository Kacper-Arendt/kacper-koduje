import styled from "styled-components"
import {AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineFacebook, AiOutlineGithub} from "react-icons/ai";

const Div = styled.div`
  grid-column: start / end;
  display: flex;
  flex-wrap: wrap;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    flex: 1 100%;
  }
`

const ContactData = styled.div`
  width: 45%;
  height: 100%;
  margin: 0 2rem;
  background-color: rgba(0, 0, 0, .2);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`

const Form = styled.div`
  width: 40%;
  height: 100%;
  background-color: red;
`
const ElContainer = styled.div`
  grid-column: 1 / 3;
  display: flex;
  align-items: center;

  p {
    :first-of-type {
      font-size: 5rem;
      color: #e0ba22;
    }

    margin: .2rem .5rem;
    white-space: nowrap;
    font-size: 2rem;
  }
`
const Social = styled.div`
  grid-column: 3/ -1;
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  svg {
    font-size: 12rem;
    fill: white;
    background-color: rgba(0, 0, 0, .3);
  }
`

export const Contact = () => {
    return (
        <Div id="contact">
            <h2>Skontaktuj się ze mną</h2>
            <ContactData>
                <ElContainer>
                    <p><AiOutlineUser/></p>
                    <p>Kacper Arendt</p>
                </ElContainer>
                <ElContainer>
                    <p><AiOutlineMail/></p>
                    <p>arendtkacper@gmail.com</p>
                </ElContainer>
                <ElContainer>
                    <p><AiOutlinePhone/></p>
                    <p>721-446-865</p>
                </ElContainer>
                <Social>
                    <a href="https://www.facebook.com/kacper.arendt.5">
                        <AiOutlineFacebook/>
                    </a>
                    <a href="https://github.com/kacykvaa">
                        <AiOutlineGithub/>
                    </a>
                </Social>
            </ContactData>
            <Form>
                <h2>Form</h2>
            </Form>
        </Div>
    )
}