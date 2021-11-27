import React, {useState} from "react";
import styled from "styled-components";
import {sendForm} from 'emailjs-com';
import {Spinner} from "../UI/Spinner";
import {StyledWrapper} from "../UI/Wrapper";
import {device} from "../../Models/MediaQueries";
import {AndThisIsJustBeginning} from "./AndThisIsJustBeginning";

const Wrapper = styled(StyledWrapper)`
  margin: 3rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;

  width: 80%;
  max-width: 60rem;
  margin: 3rem;
  padding: 2rem;
  background-color: white;

  input, textarea {
    outline: none;
    border-radius: 5px;
    margin: 1rem 0;
    padding: .5rem;
    border: 1px solid black;

    :active, :focus {
      border: 1px solid orange;
    }
  }

  h3 {
    flex: 1 100%;
    margin: 0;
    text-align: start;
    font-size: 1.5rem;
    color: black;
  }

  span {
    margin: 1rem 0 0;
    text-align: center;
    color: black;
  }

@media${device.tablet} {
  flex-flow: row wrap;

  h3 {
    flex: 1 100%;
    align-self: start;
  }

  span {
    margin: 0 0 0 2rem;
    font-size: 1.3rem;
  }
}
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 10rem;

@media${device.tablet} {
  width: 100%;
  border: 2px solid black;
}
`;

const Input = styled.input`
  flex: 1 45%;
  width: 80%;
  max-width: 40rem;

@media${device.tablet} {
  padding: 1rem .5rem;
  border: 2px solid black;
}
`;

const ButtonEl = styled.button`
  margin: 1rem 0 .5rem;
  padding: 1rem 2rem;
  transition: all .4s;

  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #1F3A60;
  color: white;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1.3px;
  text-decoration: none;
  text-transform: capitalize;

  :hover, :focus {
    background-color: #192e4d;
    transform: scale(1.05);
  }

  :active {
    transform: scale(1);
  }

@media${device.tablet} {
  margin: 1rem 0;
}
`;

export const Contact = () => {
    const [message, setMessage] = useState<string | null>();
    const [loading, setLoading] = useState(false);

    const templateId = 'template_zz2fjrh';
    const userID = 'user_7j4VonaUyBW8EtEvHomeP';
    const serviceID = 'service_jlnr2zb';

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        try {
            if (templateId && userID && serviceID) {
                const send = await sendForm(serviceID, templateId, e.target, userID);
                if (send.status === 200)
                    setMessage("Done!");
            }
        } catch (err) {
            setMessage('Something went wrong...');
        } finally {
            setLoading(false);
            setTimeout(() => {
                setMessage(null)
            }, 3000);
        }
    }

    return (
        <Wrapper id="contact">
            <AndThisIsJustBeginning/>
            <Form onSubmit={handleSubmit}>
                <h3>Contact Me</h3>
                <Input type="name" autoComplete="given-name" name="name" placeholder="Enter your name here..."
                       required/>
                <Input type="email" name='email' placeholder='Enter your email here...' required/>
                <TextArea name='message' placeholder="Your message..." required/>
                <ButtonEl type='submit'>Send</ButtonEl>
                {loading && <span><Spinner/></span>}
                {message && <span>{message}</span>}
            </Form>
        </Wrapper>
    )
}