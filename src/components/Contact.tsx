import React, {useState} from "react";
import styled from "styled-components";
import {sendForm} from 'emailjs-com';
import {
    AiOutlineUser,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineFacebook,
    AiOutlineGithub,
    AiOutlineHome
} from "react-icons/ai";

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 45%;
  height: 100%;
  margin: 0 2rem;
  background-color: rgba(0, 0, 0, .2);
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
  transition: all .4s ease-in-out;

  svg {
    font-size: 13rem;
    fill: grey;
    background-color: rgba(0, 0, 0, .3);

    :hover {
      transform: scale(1.05);
      fill: white;
    }

    :active {
      transform: scale(1);
    }
  }
`
const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  place-items: center;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);

  h3 {
    grid-column: 1 /-1;
    font-size: 2.5rem;
  }

  input, textarea {
    background-color: grey;
    color: #e0ba22;
    font-size: 2rem;
    padding: 1rem;

    :hover {
      border: 2px solid #e0ba22;
    }

    :focus {
      outline: .3rem solid #e0ba22;
    }

    ::placeholder {
      color: white;
    }
  }

  p {
    grid-column: 4 / -1;
    font-size: 2rem;
    align-self: center;
    justify-self: start;
  }
`
const TextArea = styled.textarea`
  grid-column: 3 /  -1;
  grid-row: 2 / span 2;
  width: 90%;
  height: 90%;
  align-self: end;
  justify-self: start;
  overflow: hidden;
`
const Input = styled.input`
  width: 80%;

  :first-of-type {
    grid-column: 1 / 3;
    grid-row: 2;
  }

  :nth-of-type(2) {
    grid-column: 1 / 3;
    grid-row: 3;
  }
`

const Button = styled.button`
  grid-column: 2 / span 2;
  font-size: 2rem;
  margin: 1rem;
  padding: 1rem;
  background: transparent;
  color: white;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all .2s;
  border: .3rem solid orange;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transform: scale(1.1);
    color: orange;
    border-color: white;
  }

  :active {
    transform: scale(1);
  }
`

export const Contact = () => {
    const [message, setMessage] = useState<string>();
    const templateId = process.env["REACT_APP_TEMPLATE_ID"];
    const userID = process.env["REACT_APP_USER_ID"];
    const serviceID = process.env["REACT_APP_SERVICE_ID"];

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        if (templateId && userID && serviceID) {
            const send = await sendForm(serviceID, templateId, e.target, userID);
            if (send.status === 200)
                setMessage("Zrobione!");
        } else {
            setMessage("Coś nie działa...")
        }
    }

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
                <ElContainer>
                    <p><AiOutlineHome/></p>
                    <p>Warszawa</p>
                </ElContainer>
                <Social>
                    <a href="https://www.facebook.com/kacper.arendt.5" target="_blank" rel="noopener noreferrer">
                        <AiOutlineFacebook/>
                    </a>
                    <a href="https://github.com/kacykvaa" target="_blank" rel="noopener noreferrer">
                        <AiOutlineGithub/>
                    </a>
                </Social>
            </ContactData>
            <Form onSubmit={handleSubmit}>
                <h3>Nie czekaj, napisz do mnie już teraz!</h3>
                <Input type="name" autoComplete="given-name" name="name" placeholder="Imię..."/>
                <Input type="email" name='email' placeholder='Mail...'/>
                <TextArea name='message' placeholder="Twoja wiadomość..."/>
                <Button>Wyślij</Button>
                {message && <p>{message}</p>}
            </Form>
        </Div>
    )
}