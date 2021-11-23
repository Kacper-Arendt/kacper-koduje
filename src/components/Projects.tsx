import styled from "styled-components"
import {ProjectData} from "./UI/ProjectData";
import {StyledWrapper} from "./UI/Wrapper";
import {useState} from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdCheckCircle} from "react-icons/md";
import {device} from "../Models/MediaQueries";

interface IProps {
    isActive?: boolean;
}

const Wrapper = styled(StyledWrapper)`
  background-color: #fff;
  min-height: 66rem;

  font-size: 1.2rem;
`

const ProjectContainer = styled.div<IProps>`
  display: grid;
  grid-template-columns: 1fr 75% 1fr;
  grid-template-rows: 
          repeat(2, min-content)
          minmax(min-content, 12rem) 
          26rem 
          minmax(min-content, 14.5rem)
          min-content;
  grid-template-areas: 
          ". h2 ."
          ".  nm  ."
          " . ab ."
          "larr img rarr"
          ".  ul  ."
          " .  btn  .";
  gap: 1rem;
  justify-items: center;
  
  margin: 3rem 0;
  max-width: 100rem;
  color: black;
  text-align: center;

  h2 {
    grid-area: h2;
    text-align: left;
  }

  h3 {
    grid-area: nm;
  }

  p {
    grid-area: ab;
    max-width: 30rem;

    letter-spacing: 1.7px;
    line-height: 1.5;
    overflow: hidden;
  }

  img {
    grid-area: img;
    width: 100%;
    height: 100%;
    max-width: 25rem;
  }

  svg {
    font-size: 3rem;
    color: rgba(0, 0, 0, 1);

    :first-of-type {
      grid-area: larr;
    }

    :last-of-type {
      grid-area: rarr;
    }

    :hover {
      :first-of-type, :last-of-type {
        color: orange;
      }
    }
  }

@media${device.mobileS} {
  grid-template-rows: 
          repeat(2, min-content)
          minmax(min-content, 11rem) 
          30rem 
          minmax(min-content, 12.5rem)
          min-content;

  img {
    max-width: 30rem;
  }

} @media${device.tablet} {
  text-align: left;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows:
          min-content
          min-content
  repeat(3, 10rem)
  5rem          
  min-content;
  grid-template-areas:
          "h2 h2 . . . ."
          " . nm  . . . ."
          ". ab ab img img ."
          ". ab ab img img . "
          ". ul . img img . "
          " . ul . . btn . "
          "larr . . .  . rarr";
  img {
    border-bottom-left-radius: 1rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  h3 {
    place-self: start;
    font-size: 1.5rem;
  }

  p {
    place-self: start;
    width: 80%;
    font-size: 1.1em;
  }
}
`
const Technologies = styled.ul`
  grid-area: ul;
  font-size: 1.2em;
  text-align: left;

  li {
    margin: .3rem;
    list-style: none;
    white-space: nowrap;
  }

  svg {
    margin-right: .5rem;
    font-size: 1em;
  }

`
export const Button = styled.a`
  grid-area: btn;
  align-self: start;
  padding: 1.5rem 1rem;

  transition: all .4s;
  background-color: #1F3A60;
  color: white;
  
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  text-transform: capitalize;
  white-space: nowrap;

  :hover {
    background-color: white;
    color: black;
    outline: 2px solid black;
  }
`

export const Projects = () => {
    const [currentProject, setCurrentProject] = useState(5);

    const nextProjectHandler = () => {
        if (currentProject < ProjectData.length - 1) {
            setCurrentProject(currentProject + 1);
        } else {
            setCurrentProject(0);
        }
    }
    const prevProjectHandler = () => {
        if (currentProject > 0) {
            setCurrentProject(currentProject - 1);
        } else {
            setCurrentProject(5);
        }
    }

    return (
        <Wrapper id='projects'>
            <ProjectContainer key={ProjectData[currentProject].id}>
                <h2>Projects</h2>
                <MdKeyboardArrowLeft onClick={prevProjectHandler}/>
                <h3>{ProjectData[currentProject].name}</h3>
                {<p>{ProjectData[currentProject].description}</p>}
                <img src={ProjectData[currentProject].img} alt={ProjectData[currentProject].alt}/>
                <Technologies>
                    {ProjectData[currentProject].technologies.map(el => {
                        return (
                            <li key={el}><MdCheckCircle/>{el}</li>
                        )
                    })}
                </Technologies>
                <Button href={ProjectData[currentProject].link} target="_blank"
                        rel="noopener noreferrer">Try this app</Button>
                <MdKeyboardArrowRight onClick={nextProjectHandler}/>
            </ProjectContainer>
        </Wrapper>
    )
}