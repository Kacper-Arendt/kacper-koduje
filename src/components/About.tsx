import styled from "styled-components";
import {StyledWrapper} from "./UI/Wrapper";
import {device} from "../Models/MediaQueries";

const Div = styled(StyledWrapper)`
  margin: 5rem 0;
  h2 {
    width: 80%;
    margin-top: 2rem;
  }

@media${device.tablet} {
  margin: 10rem 0;
  display: grid;
  max-width: 110rem;
  grid-template-rows: 10rem fit-content(50vh);
  grid-template-columns: 1fr minmax(60%, 30rem) minmax(25%, 15rem) 1fr;
  grid-template-areas: 
      ". header . ."
      ". text img .";
  place-self: center;
  grid-column-gap: 2rem;
  h2 {
    grid-area: header;
  }
}
@media${device.laptopL} {
  margin: 13rem 0;
}
`

const Text = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  color: black;
  grid-area: text;

  p {
    margin: 1rem 0;
    line-height: 1.8;
    letter-spacing: 1.7px;

    :first-of-type {
      margin: 0;
    }
  }

@media${device.tablet} {
  width: 100%;
}
`
const Image = styled.div`
  grid-area: img;
  height: 100%;
  width: 100%;
  background-image: url('https://ik.imagekit.io/kacper/kacper-koduje/me__7_MB3MYNw.jpg?updatedAt=1629351836513');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
`


export const About = () => {
    return (
        <Div id='about'>
            <h2>About</h2>
            <Text>
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
            </Text>
            <Image>
            </Image>
        </Div>
    )
}