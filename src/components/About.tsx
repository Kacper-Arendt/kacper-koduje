import styled from "styled-components";
import {StyledWrapper} from "./UI/Wrapper";
import {device} from "../Models/MediaQueries";
import {me} from '../images/Images'

const Div = styled(StyledWrapper)`
  div {
    width: 80%;
    max-width: 100rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  }

  h2 {
    width: 80%;
    margin-top: 2rem;
  }

  p {
    margin: 1rem 0;
    line-height: 1.8;
    letter-spacing: 1.7px;

    :first-of-type {
      margin: 0;
    }
  }

@media${device.tablet} {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;

  div {
    width: 50%;

    :nth-of-type(2) {
      width: 35%;
      margin-left: 2rem;
      background-image: url(${me});
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: 65%;
    }
  }

} @media${device.desktop} {
  p {
    line-height: 1.5;
  }
}
`

export const About = () => {
    return (
        <Div id='about'>
            <h2>About</h2>
            <div>
                <p>
                    I’m 25 years old, and a third-year student of engineering studies in the field of logistics. I have
                    been programming for over a year. With the help of many online courses, I have mastered the basics
                    of JavaScript and TypeScript. I started my programming adventure with HTML/CSS, Php and MySQL.
                </p>
                <p>
                    After gaining sufficient knowledge, I started to create my own application under the wings of two
                    friendly developers. The opportunity to work in a team allows me to discover the latest
                    technologies. Understanding what I am doing wrong gives me an opportunity to improve the quality of
                    my code.
                </p>
                <p>
                    Programming and the desire for self-improvement absorbed me to such an extent that I decided to
                    change my professional life. <b> I am looking for a job or internship as a junior front-end
                    developer.</b>

                </p>
            </div>
            <div>
            </div>
        </Div>
    )
}