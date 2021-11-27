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
  min-height: 62rem;
  justify-content: center;
`;

const ProjectContainer = styled.div<IProps>`
  display: grid;
  grid-template-columns: 1fr 75% 1fr;
  grid-template-rows: 
          repeat(2, min-content)
          minmax(min-content, 9rem)
          min-content
          minmax(min-content, 12.5rem)
          min-content;
  grid-template-areas: 
          ". h2 ."
          ".  nm  ."
          " . ab ."
          "larr img rarr"
          ". ul ."
          " .  btn  .";
  row-gap: 1rem;
  justify-items: center;

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
    line-height: 1.5;
  }

  img {
    grid-area: img;
    height: 20rem;
    max-width: 25rem;
  }

  svg {
    font-size: 3rem;
    color: black;

    :first-of-type {
      grid-area: larr;
      align-self: center;
    };

    :last-of-type {
      grid-area: rarr;
      align-self: center;
    };

    :hover {
      :first-of-type, :last-of-type {
        color: orange;
      }
    };
  }
  @media${device.mobileM}{
  img{
    height: 25rem;
    max-width: 25rem;
  }
}
  
@media${device.tablet} {
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows:
          min-content
          min-content
  repeat(2, 15rem)
  min-content;
  grid-template-areas:
          ". h2 . . . ."
          " . nm  nm . . ."
          ". ab ab img img ."
          ". ul ul img img . "
          ". . . . . ."
          " larr . . . btn rarr ";
  text-align: left;
  column-gap: 2rem;

  img {
    border-bottom-left-radius: 1rem;
    height: 30rem;
    justify-self: end ;
  }

  h3 {
    place-self: start;
  }

  p {
    place-self: start;
    width: 80%;
  }
}
`;
const Technologies = styled.ul`
  grid-area: ul;
  justify-self: start;
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

@media${device.tablet} {
  align-self: end;
}
`;

export const Button = styled.a`
  grid-area: btn;
  align-self: start;
  padding: 1.2rem;

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
  
  @media${device.tablet}{
  justify-self: end;
}
`;

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