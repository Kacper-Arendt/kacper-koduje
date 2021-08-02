import styled from "styled-components";
import {icons} from '../images/Images';
import {device} from "../Models/MediaQueries";
import {StyledWrapper} from "./UI/Wrapper";

const Wrapper = styled(StyledWrapper)`
`

const Div = styled.div`
  margin: 3rem 0;
  width: 80%;
  max-width: 110rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgba(0, 0, 0, .6);
  border: .2rem solid black;
  border-radius: 5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;


  h3 {
    flex: 1 100%;
    text-align: center;
    margin: 2rem 0;
    color: #e0ba22;

    :last-of-type {
      margin-top: .5rem;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 30%;
  align-items: center;

  :hover {
    color: orange;
  }

  p {
    margin: 1rem 0;
    font-weight: 700;
  }

  svg {
    width: 4rem;
    height: 4rem;
    transition: all .3s;
    margin: 1rem 0 0;

    :hover {
      transform: scale(1.2);
      fill: orange;
    }
  }

@media${device.laptop} {
  svg {
    width: 7rem;
    height: 7rem;
  }
}
@media${device.laptop} {
  width: 25%;
  margin: 3rem 0;
}
`

export const Skills = () => {
    return (
        <Wrapper>
            <h2>Umiejętności</h2>
            <Div id='skills'>
                <h3>Technologie których używam</h3>
                <IconContainer>
                    <svg>
                        <use href={icons + '#javascript'}/>
                    </svg>
                    <p>JavaScript</p>
                </IconContainer>
                <IconContainer>
                    <svg>
                        <use href={icons + '#typescript'}/>
                    </svg>
                    <p>TypeScript</p>
                </IconContainer>
                <IconContainer>
                    <svg>
                        <use href={icons + '#react'}/>
                    </svg>
                    <p>React</p>
                </IconContainer>
                <IconContainer>
                    <svg>
                        <use href={icons + '#css'}/>
                    </svg>
                    <p>CSS</p>
                </IconContainer>
                <IconContainer>
                    <svg>
                        <use href={icons + '#html-5'}/>
                    </svg>
                    <p>HTML</p>
                </IconContainer>
                <IconContainer>
                    <svg>
                        <use href={icons + '#github'}/>
                    </svg>
                    <p>Github</p>
                </IconContainer>
                <IconContainer>
                    <svg>
                        <use href={icons + '#nodejs'}/>
                    </svg>
                    <p>Node</p>
                </IconContainer>
                <h3>Technologie które znam</h3>
                <IconContainer>
                    <svg>
                        <use href={icons + '#php'}/>
                    </svg>
                    <p>Php</p>
                </IconContainer>
                <IconContainer>
                    <svg>
                        <use href={icons + '#docker'}/>
                    </svg>
                    <p>Docker</p>
                </IconContainer>
                <IconContainer>
                    <svg>
                        <use href={icons + '#mysql'}/>
                    </svg>
                    <p>MySQL</p>
                </IconContainer>
                <IconContainer>
                    <svg>
                        <use href={icons + '#composer'}/>
                    </svg>
                    <p>Composer</p>
                </IconContainer>
            </Div>
        </Wrapper>
    )
}