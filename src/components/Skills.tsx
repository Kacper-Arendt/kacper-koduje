import styled from "styled-components";
import {icons} from '../images/Images';
import {StyledWrapper} from "./UI/Wrapper";

const Wrapper = styled(StyledWrapper)`
`

const Div = styled.div`
  margin: 3rem 0;
  width: 90%;
  max-width: 150rem;
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
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
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

  h4 {
    margin: 1rem 0;
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
                <h3>Technologie które znam</h3>
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
        </Wrapper>
    )
}