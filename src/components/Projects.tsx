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
`

const ProjectContainer = styled.div<IProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, min-content);
  grid-template-areas: 
          ". h2 ."
          ".  nm  ."
          " . ab ."
          "larr img rarr"
          ".  ul  ."
          " .  btn  .";
  gap: 1rem;
  margin: 3rem 0;
  width: 90%;
  max-width: 100rem;
  color: black;
  justify-items: center;
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

      :active {
        :first-of-type, :last-of-type {
        }
      }
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

  img {
    border-bottom-left-radius: 1rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3rem;
  }

  h3 {
    place-self: start;
  }

  p {
    place-self: start;
    width: 70%;
  }
}
`
const Technologies = styled.ul`
  grid-area: ul;
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
  background-color: #1F3A60;
  color: white;
  cursor: pointer;
  padding: 1rem;
  text-decoration: none;
  transition: all .4s;
  font-weight: bold;
  text-transform: capitalize;

  :hover {
    background-color: white;
    color: black;
    outline: 2px solid black;
  }

  &:active {
    letter-spacing: 2px;
  }
`

export const Projects = () => {
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