import styled from "styled-components"
import icons from '../images/iconsCollection.svg';

const Div = styled.div`
  grid-column: center-start / center-end;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: rgba(0, 0, 0, .2);
  border: .4rem solid black;
  border-radius: 5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
  
  h2 {
    flex: 3 100%;
    text-align: center;
    font-size: 3rem;
    margin: 1rem 0 1.5rem;
    color: #e0ba22;
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 3rem 1rem;
  justify-content: center;
  
  align-items: center;
  width: 20%;

  :hover {
    color: orange;
  }

  h4 {
    font-size: 2rem;
  }

  svg {
    width: 11rem;
    transition: all .3s;

    :hover {
      transform: scale(1.2);
      fill: orange;
    }
  }
`

export const Skills = () => {
    return (
        <Div id='skills'>
            <h2>Technologie których używam</h2>
            <IconContainer>
                <svg>
                    <use href={icons + '#javascript'}/>
                </svg>
                <h4>JavaScript</h4>
            </IconContainer>
            <IconContainer>
                <svg>
                    <use href={icons + '#typescript'}/>
                </svg>
                <h4>TypeScript</h4>
            </IconContainer>
            <IconContainer>
                <svg>
                    <use href={icons + '#react'}/>
                </svg>
                <h4>React</h4>
            </IconContainer>
            <IconContainer>
                <svg>
                    <use href={icons + '#css'}/>
                </svg>
                <h4>CSS</h4>
            </IconContainer>
            <IconContainer>
                <svg>
                    <use href={icons + '#html-5'}/>
                </svg>
                <h4>HTML</h4>
            </IconContainer>
            <IconContainer>
                <svg>
                    <use href={icons + '#github'}/>
                </svg>
                <h4>Github</h4>
            </IconContainer>
            <IconContainer>
                <svg>
                    <use href={icons + '#nodejs'}/>
                </svg>
                <h4>Node</h4>
            </IconContainer>
            <h2>Technologie które znam</h2>
            <IconContainer>
                <svg>
                    <use href={icons + '#php'}/>
                </svg>
                <h4>Php</h4>
            </IconContainer>
            <IconContainer>
                <svg>
                    <use href={icons + '#docker'}/>
                </svg>
                <h4>Docker</h4>
            </IconContainer>
            <IconContainer>
                <svg>
                    <use href={icons + '#mysql'}/>
                </svg>
                <h4>MySQL</h4>
            </IconContainer>
            <IconContainer>
                <svg>
                    <use href={icons + '#composer'}/>
                </svg>
                <h4>Composer</h4>
            </IconContainer>
        </Div>
    )
}