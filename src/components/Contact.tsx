import React, {useState} from "react";
import styled from "styled-components";
import {sendForm} from 'emailjs-com';
import {Spinner} from "./UI/Spinner";
import {StyledWrapper} from "./UI/Wrapper";
import {device} from "../Models/MediaQueries";
import { Button } from "./Projects";

const Wrapper = styled(StyledWrapper)`
`

const Form = styled.div`
  width: 80%;
  height: 100%;
  max-width: 60rem;
  margin: 3rem;
  padding: 1rem;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas: 
          "h3 h3"
          "name name"
          "mail mail"
          "text text"
          "text text"
          "btn btn";
  place-items: center;
  gap: 1.5rem;
 
  h3{
    grid-area: h3;
    color: black;
    place-self: center;
    text-align: center;
  }
  
  input, textarea{
    padding: .5rem;
  }
  
`

const TextArea = styled.textarea`
  grid-area: text;
  width: 80%;
  max-width: 40rem;
  height: 100%;
  overflow: hidden;

@media${device.laptop} {
}
`
const Input = styled.input`
  width: 80%;
  max-width: 40rem;

  :first-of-type {
    grid-area: name;
  }

  :nth-of-type(2) {
    grid-area: mail;
  }
`
const ButtonEl = styled(Button)`
  grid-area: btn;
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
            <Form onSubmit={handleSubmit}>
                <h3>Contact Me</h3>
                <Input type="name" autoComplete="given-name" name="name" placeholder="Enter your name here..."/>
                <Input type="email" name='email' placeholder='Enter your email here...'/>
                <TextArea name='message' placeholder="Your message..."/>
                <ButtonEl>Send</ButtonEl>
                {loading && <p><Spinner/></p>}
                {message && <p>{message}</p>}
            </Form>
        </Wrapper>
    )
}