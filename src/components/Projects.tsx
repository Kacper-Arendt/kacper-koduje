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
  justify-content: center;
`

const ProjectContainer = styled.div<IProps>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, min-content);
  grid-template-areas: 
          "h2 h2 . . ."
          "nm nm nm nm nm"
          "larr ab ab ab rarr"
          "larr img img img rarr"
          ". . ul . ."
          " . . btn . .";
  margin-top: 3rem;
  place-items: center;
  width: 90%;
  max-width: 100rem;
  color: black;
  text-align: center;

  h2 {
    grid-area: h2;
  }

  h3 {
    grid-area: nm;
  }

  p {
    grid-area: ab;
    letter-spacing: 1.7px;
    line-height: 1.5;
    overflow: hidden;
  }

  img {
    grid-area: img;
    width: 60%;
    max-width: 25rem;
    border-bottom-left-radius: 1rem;
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
  }

@media${device.laptop} {
  text-align: left;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
          "h2 h2 . . . ."
          ". nm . img img ."
          ". ab ab img img . "
          ". ul . img img . "
          " . ul . . btn . "
          "larr . . .  . rarr";
}

  img{
    height: 100%;
    width: 100%;
  }
  h2 {
    text-align: center;
  }

  h3 {
    place-self: start;
  }
  
  p{
    place-self: start;
    width: 70%;
  }
`
const Technologies = styled.ul`
  grid-area: ul;
  margin: 1rem 0;
  font-size: 1.5rem;
  text-align: left;

  li {
    margin: .3rem;
    flex: 1 30%;
    list-style: none;
    white-space: nowrap;
  }

  svg {
    margin-right: .5rem;
    font-size: 1em;
  }

`
const Button = styled.a`
  grid-area: btn;
  margin: 1rem 0 2rem;
  background-color: #1F3A60;
  color: white;
  cursor: pointer;
  padding: 1rem;
  border-radius: 2px;
  text-decoration: none;
  
`

export const Projects = () => {
    const [active, setActive] = useState(false);
    const [currentProject, setCurrentProject] = useState(0);

    const nextProjectHandler = () => {
        if (currentProject < 3) {
            setCurrentProject(currentProject + 1);
        } else {
            setCurrentProject(0);
        }
    }
    const prevProjectHandler = () => {
        if (currentProject > 0) {
            setCurrentProject(currentProject - 1);
        } else {
            setCurrentProject(3);
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
                            <li><MdCheckCircle/>{el}</li>
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