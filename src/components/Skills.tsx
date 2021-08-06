import styled from "styled-components";
import {icons} from '../images/Images';
import {device} from "../Models/MediaQueries";
import {StyledWrapper} from "./UI/Wrapper";

const Wrapper = styled(StyledWrapper)`
  margin: 3rem 0;

`

const Div = styled.div`
  margin: 1rem 0;
  width: 80%;
  max-width: 110rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;


  h3 {
    flex: 1 100%;
    text-align: center;
    padding: 2rem 0 2rem;
    color: black;

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
    color: black;
    font-weight: 700;
  }

  svg {
    width: 3rem;
    height: 3rem;
    transition: all .3s;
    margin: 1.5rem 0 0;

    :hover {
      transform: scale(1.2);
      fill: orange;
    }
  }

@media${device.laptop} {
  svg {
    width: 6rem;
    height: 6rem;
  }
} @media${device.laptop} {
  width: 25%;
  margin: 3rem 0;
}
`

export const Skills = () => {
    return (
        <Wrapper>
            <Div id='skills'>
                <h3>Technologies that I use</h3>
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
            </Div>

            <Div>
                <h3>Technologies that I learned</h3>
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