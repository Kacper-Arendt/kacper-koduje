import React, {useState} from "react";
import styled from "styled-components";
import {sendForm} from 'emailjs-com';
import {Spinner} from "./UI/Spinner";
import {StyledWrapper} from "./UI/Wrapper";
import {device} from "../Models/MediaQueries";

const Wrapper = styled(StyledWrapper)`
`

const Div = styled.div`
  width: 80%;
  max-width: 60rem;
  margin: 3rem;
  padding: 2rem 0 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  place-items: center;

  h3 {
    color: black;
    text-align: start;
    font-size: 1.5rem;
  }

@media${device.tablet} {
  flex-flow: row wrap;
  place-items: flex-start;

  h3 {
    flex: 1 100%;
    margin-left: 3rem;
  }
}
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;

  input, textarea {
    outline: none;
    border-radius: 5px;

    :hover {
      transform: scale(1.01);
    }

    :active, :focus {
      border: 2px solid orange;
    }
  }

  span {
    color: black;
    margin: 1rem 0 0;
    text-align: center;
  }

@media${device.tablet} {
  width: 70%;
  flex-flow: row wrap;
  margin-left: 3rem;

  span {
    margin: 0 0 0 2rem;
    font-size: 1.3rem;
  }
}
`
const TextArea = styled.textarea`
  width: 80%;
  height: 10rem;
  margin: 1rem 0;
  padding: .5rem;
  overflow: hidden;
  border: 1px solid black;

@media${device.tablet} {
  width: 100%;
  border: 2px solid black;
}
`
const Input = styled.input`
  width: 80%;
  max-width: 40rem;
  margin: 1rem 0;
  padding: .5rem;
  border: 1px solid black;

@media${device.tablet} {
  width: 45%;
  padding: 1rem .5rem;
  border: 2px solid black;

  :first-of-type {
    margin-right: auto;
  }
}
`
const ButtonEl = styled.button`
  place-self: center;
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
  place-self: flex-start;
  margin: 1rem 0;
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
            <Div>
                <h3>Contact Me</h3>
                <Form onSubmit={handleSubmit}>
                    <Input type="name" autoComplete="given-name" name="name" placeholder="Enter your name here..."/>
                    <Input type="email" name='email' placeholder='Enter your email here...'/>
                    <TextArea name='message' placeholder="Your message..."/>
                    <ButtonEl>Send</ButtonEl>
                    {loading && <span><Spinner/></span>}
                    {message && <span>{message}</span>}
                </Form>
            </Div>
        </Wrapper>
    )
}