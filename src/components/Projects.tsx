import styled from "styled-components"
import {ProjectData} from "./UI/ProjectData";
import {StyledWrapper} from "./UI/Wrapper";
import {useEffect, useState} from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdRotateLeft, MdRotateRight} from "react-icons/md";
import {device} from "../Models/MediaQueries";

interface IProps {
    isActive: boolean;
}

const Wrapper = styled(StyledWrapper)`
`

const Div = styled.div`
  margin: 2rem 0;
  padding: 1rem 0;
  perspective: 500rem;
  -moz-perspective: 500rem;
  transition: all .2s;

  display: grid;
  grid-template-columns: 5vw 80vw 5vw;
  grid-template-rows: 80vh 1fr;
  place-items: center;
  grid-gap: 0 1rem;

  svg {
    font-size: 3rem;
    grid-row: 1;
    color: rgba(255, 255, 255, .8);

    :first-of-type {
      grid-column: 1;
    }

    :last-of-type {
      grid-column: 3;
    }

    :hover {
      transform: scale(1.1);
      color: rgba(255, 255, 255, 1);
    }

    :active {
      transform: scale(1);
      color: rgba(255, 255, 255, .8);
    }
  }

  button {
    grid-column: 2;
    grid-row: 2;
    background-color: rgba(0, 0, 0, .1);
    color: black;
    padding: .2rem 1rem;
    border: 2px solid black;
    cursor: pointer;
    border-radius: 5px;
    -webkit-box-shadow: 8px 8px 24px 0 rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0 rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0 rgba(66, 68, 90, 1);

    svg {
      font-size: 2rem;
    }
    :hover {
      transform: scale(1.05);
    }

    :active {
      transform: scale(1);
    }
  }

@media${device.tablet} {
  grid-template-columns: 1fr auto;
  grid-template-rows:  1fr;
  grid-gap: 2rem 5rem;

  svg {
    font-size: 5rem;
  }

  button {
    svg {
      font-size: 3rem;
    }
  }
}
`

const ProjectContainer = styled.div<IProps>`
  grid-column: 2 /3;
  grid-row: 1;
  width: 100%;
  height: 90%;
  transform-style: preserve-3d;
  transition: transform 1s;

  -webkit-transform: ${(props) => props.isActive ? "rotateY(180deg)" : "none"};
  -moz-transform: ${(props) => props.isActive ? "rotateY(180deg)" : "none"};
  -o-transform: ${(props) => props.isActive ? "rotateY(180deg)" : "none"};
  transform: ${(props) => props.isActive ? "rotateY(180deg)" : "none"};

@media${device.tablet} {
  width: 40rem;
  height: 50rem;
}
`

const Side = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background-color: orange;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Front = styled(Side)`
  justify-self: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }


`
const Back = styled(Side)`
  transform: rotateY(180deg);
  background-color: #635F47;
  text-align: center;

  h3 {
    margin: 2rem 0 1rem;
  }

  p {
    padding: 1rem 2rem;
    letter-spacing: 2px;
    line-height: 2;
    overflow: hidden;
  }

@media${device.tablet} {
  p {
    width: 80%;
  }
;
}
`
const Button = styled.a`
  margin-top: 1rem;
  background-color: rgba(0, 0, 0, .1);
  color: white;
  border: 2px solid black;
  cursor: pointer;
  padding: 1rem;
  border-radius: 5px;
  -webkit-box-shadow: 8px 8px 24px 0 rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0 rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0 rgba(66, 68, 90, 1);
  text-decoration: none;
  letter-spacing: 2px;
  transition: all .2s;

  :hover {
    transform: scale(1.05);
  }

  :active {
    transform: scale(1);
  }
`

export const Projects = () => {
    const [active, setActive] = useState(false);
    const [currentProject, setCurrentProject] = useState(0);

    useEffect(() => {
        currentProjectHandler();
    }, [currentProject])

    const currentProjectHandler = () => {
        return (
            <ProjectContainer isActive={active} key={ProjectData[currentProject].id}>
                <Front>
                    <img src={ProjectData[currentProject].img} alt={ProjectData[currentProject].alt}/>
                </Front>
                <Back>
                    <h3>{ProjectData[currentProject].name}</h3>
                    <p>{ProjectData[currentProject].description}</p>
                    <Button href={ProjectData[currentProject].link} target="_blank"
                            rel="noopener noreferrer">Zobacz</Button>
                </Back>
            </ProjectContainer>
        )
    }
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
            <h2>Projekty</h2>
            <Div>
                <MdKeyboardArrowLeft onClick={prevProjectHandler}/>
                {currentProjectHandler()}
                <button onClick={() => {
                    setActive(!active)
                }}>{active ? <MdRotateLeft/> : <MdRotateRight/>}
                </button>
                <MdKeyboardArrowRight onClick={nextProjectHandler}/>
            </Div>
        </Wrapper>
    )
}