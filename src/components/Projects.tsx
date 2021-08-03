import styled from "styled-components"
import {ProjectData} from "./UI/ProjectData";
import {StyledWrapper} from "./UI/Wrapper";
import {useEffect, useState} from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdRotateLeft, MdRotateRight} from "react-icons/md";

interface IProps {
    isActive: boolean;
}

const Wrapper = styled(StyledWrapper)`
`

const Div = styled.div`
  padding: 1rem 0;
  perspective: 500rem;
  -moz-perspective: 500rem;
  transition: all .2s;

  display: grid;
  grid-template-columns: 7vw 80vw 7vw;
  grid-template-rows: 80vh 1fr;
  place-items: center;

  svg {
    font-size: 3rem;
    grid-row: 1;

    :first-of-type {
      grid-column: 1;
    }

    :last-of-type {
      grid-column: 3;
    }
  }

  button {
    grid-column: 2;
    grid-row: 2;
    background-color: orange;
    color: black;
    padding: .2rem 1rem;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    -webkit-box-shadow: 8px 8px 24px 0 rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0 rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0 rgba(66, 68, 90, 1);

    :hover {
      transform: scale(1.05);
    }

    :active {
      transform: scale(1);
    }
  }
`

const ProjectContainer = styled.div<IProps>`
  position: relative;
  width: 100%;
  height: 85%;
  transform-style: preserve-3d;
  transition: transform 1s;

  -webkit-transform: ${(props) => props.isActive ? "rotateY(180deg)" : "none"};
  -moz-transform: ${(props) => props.isActive ? "rotateY(180deg)" : "none"};
  -o-transform: ${(props) => props.isActive ? "rotateY(180deg)" : "none"};
  transform: ${(props) => props.isActive ? "rotateY(180deg)" : "none"};
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
    font-size: 1.5rem;
  }

  p {
    padding: 1rem 2rem;
    letter-spacing: 2px;
    line-height: 2;
    overflow: hidden;
  }
`
const Button = styled.a`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid black;
  background: transparent;
  color: white;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all .2s;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transform: scale(1.1);
    color: black;
    border: 2px solid white;
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