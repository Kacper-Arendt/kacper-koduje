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
import {Spinner} from "./UI/Spinner";
import {StyledWrapper} from "./UI/Wrapper";
import {device} from "../Models/MediaQueries";

const Wrapper = styled(StyledWrapper)`
@media${device.laptopL} {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
}
`

const FlexItem = styled.div`
  width: 80%;
  height: 100%;
  max-width: 60rem;
  margin: 2rem 2rem 1rem;
  background-color: rgba(0, 0, 0, .6);

@media${device.laptopL} {
  width: 45%;
  height: 20rem;
}
`

const ContactData = styled(FlexItem)`
  display: flex;
  flex-direction: column;
  padding: .5rem;

@media${device.mobileM} {
  flex-direction: row;
  justify-content: space-between;
}
`
const Form = styled(FlexItem)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  place-items: center;

  h3 {
    grid-column: 1 /-1;
    grid-row: 1;
    margin: 1rem 0;
    text-align: center;
    line-height: 1.5;
  }

  input, textarea {
    background-color: grey;
    color: #e0ba22;
    padding: .5rem;

    :hover {
      outline: 1px solid #e0ba22;
    }

    :focus {
      outline: .2rem solid #e0ba22;
    }

    ::placeholder {
      color: white;
    }
  }

  p {
    grid-column: 1 /-1;
    grid-row: 7;
  }

@media${device.laptop} {
  grid-template-rows: repeat(4, 1fr);
  padding-bottom: 1rem;

  p {
    grid-column: 3 /-1;
    grid-row: 4;
  }
} @media${device.laptopL} {
  input {
    font-size: 1.3rem;
  }

  textarea {
    font-size: 1rem;
  }
}
`

const Data = styled.div`
  display: flex;
  flex-direction: column;

@media${device.laptopL} {
  justify-content: center;
}
`

const Element = styled.div`
  display: flex;
  margin: .5rem 0;

  p {
    margin-left: .5rem;
    white-space: nowrap;

    :first-of-type {
      color: #e0ba22;
    }
  }

@media${device.laptopL} {
  margin: 1rem 0;
}
`
const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all .4s ease-in-out;

  svg {
    font-size: 5rem;
    fill: grey;
    background-color: rgba(0, 0, 0, .3);
    margin: .5rem;

    :hover {
      transform: scale(1.05);
      fill: white;
    }

    :active {
      transform: scale(1);
    }
  }

@media${device.mobileM} {
  svg {
    font-size: 7rem;
  }
} @media${device.laptopL} {
  flex-direction: column;
}
`
const TextArea = styled.textarea`
  grid-column: 1 /  -1;
  grid-row: 4 / span 2;
  width: 80%;
  max-width: 40rem;
  height: 90%;
  overflow: hidden;

@media${device.laptop} {
  grid-column: 3 / -1;
  grid-row: 2 / 4;
}
`
const Input = styled.input`
  width: 80%;
  max-width: 40rem;
  grid-column: 1 / -1;
  margin: 1rem 0;

  :first-of-type {
    grid-row: 2;
  }

  :nth-of-type(2) {
    grid-row: 3;
  }

@media${device.laptop} {
  grid-column: 1 /3;
}
`
const Button = styled.button`
  grid-column: 2 / span 2;
  grid-row: 6;
  border: .2rem solid orange;
  transition: all .2s;
  padding: .7rem 1rem;
  background: transparent;
  color: white;
  letter-spacing: 2px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transform: scale(1.05);
    color: orange;
    border-color: white;
  }

  :active {
    transform: scale(1);
  }

@media${device.laptop} {
  grid-row: 4;
}
`

export const Contact = () => {
    const [message, setMessage] = useState<string | null>();
    const [loading, setLoading] = useState(false);

    const templateId = process.env["REACT_APP_TEMPLATE_ID"];
    const userID = process.env["REACT_APP_USER_ID"];
    const serviceID = process.env["REACT_APP_SERVICE_ID"];

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        try {
            if (templateId && userID && serviceID) {
                const send = await sendForm(serviceID, templateId, e.target, userID);
                if (send.status === 200)
                    setMessage("Zrobione!");
            }
        } catch (err) {
            setMessage('Coś poszło nie tak')
        } finally {
            setLoading(false);
            setTimeout(() => {
                setMessage(null)
            }, 3000);
        }
    }

    return (
        <Wrapper id="contact">
            <h2>Skontaktuj się ze mną</h2>
            <ContactData>
                <Data>
                    <Element>
                        <p><AiOutlineUser/></p>
                        <p>Kacper Arendt</p>
                    </Element>
                    <Element>
                        <p><AiOutlineMail/></p>
                        <p>arendtkacper@gmail.com</p>
                    </Element>
                    <Element>
                        <p><AiOutlinePhone/></p>
                        <p>721-446-865</p>
                    </Element>
                    <Element>
                        <p><AiOutlineHome/></p>
                        <p>Warszawa</p>
                    </Element>
                </Data>
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
                {loading && <p><Spinner/></p>}
                {message && <p>{message}</p>}
            </Form>
        </Wrapper>
    )
}