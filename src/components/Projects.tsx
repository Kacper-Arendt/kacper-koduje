import styled from "styled-components"
import {quizLab, orlik, todoApp, weatherState} from '../images/Images';

const Div = styled.div`
  grid-column: start / end;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 3rem;
  background-color: rgba(0, 0, 0, .2);
  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
  perspective: 300rem;
  -moz-perspective: 300rem;
  transition: all .2s;

  h2 {
    flex: 1 100%;
    padding: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 4rem;
    letter-spacing: 3px;
  }

  > div {
    transform: scale(.97);
  }

  :hover {
    > * {
      transform: scale(1);  
    }
  }

`

const ProjectContainer = styled.div`
  position: relative;
  width: 30%;
  max-width: 55rem;
  min-width: 40rem;
  height: 55rem;
  margin: 1rem;
  transform-style: preserve-3d;
  transition: transform 1s;

  :hover {
    transform: rotateY(-180deg);
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
  background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.2), rgba(117, 19, 93, 1.7));

  h3 {
    margin: 2rem 1rem 1rem;
    font-size: 2.5rem;
    text-align: center;
  }

  p {
    padding: 1rem 2.5rem;
    font-size: 1.8rem;
    letter-spacing: 2px;
    line-height: 1.7;
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
  font-size: 1.5rem;
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
    return (
        <Div id='projects'>
            <h2>Moje Projekty</h2>
            <ProjectContainer>
                <Front>
                    <img src={quizLab} alt="Game page from quiz lab"/>
                </Front>
                <Back>
                    <h3>QuizLab</h3>
                    <p>Aplikacja dzięki której można poszerzać swoją wiedzę z zakresu frontend`u. Użytkownik może zagrać
                        bez konieczności rejestracji. Przy tworzeniu korzystałem z takich technologii jak TypeScript,
                        React, Redux, StyledComponents. Do stworzenia bazy danych oraz autoryzacji użytkowników użyłem
                        platformy Firebase.
                    </p>
                    <Button href="https://kacykvaa.github.io/quiz-lab/#/" target="_blank" rel="noopener noreferrer">Zobacz</Button>
                </Back>
            </ProjectContainer>
            <ProjectContainer>
                <Front>
                    <img src={weatherState} alt="Weather state page"/>
                </Front>
                <Back>
                    <h3>Weather State</h3>
                    <p>
                        Aplikacja umożliwia sprawdzenie pogody w dowolnym mieście na ziemi. W menu miasta istnieje
                        możliwość dodania do listy ulubionych. Wszystkie ulubione miasta ładują się automatycznie. Dane
                        pogodowe pobierane są z serwisu OpenWeatherMap. Do napisania Weather State użyłem TypeScript,
                        React, Redux i StyledComponents.
                    </p>
                    <Button href="https://kacykvaa.github.io/Weather-State/" target="_blank" rel="noopener noreferrer">Zobacz</Button>
                </Back>
            </ProjectContainer>
            <ProjectContainer>
                <Front>
                    <img src={todoApp} alt="Todo app page"/>
                </Front>
                <Back>
                    <h3>TodoApp</h3>
                    <p>
                        TodoApp to bardzo prosta aplikacja, która służy do tworzenia listy zadań. Był to pierwszy
                        projekt, który napisałem w TypeScripcie. TodoApp powstała przy pomocy React`a, Redux`a i
                        StyledComponent`s.
                    </p>
                    <Button href="https://kacykvaa.github.io/Todo-App/" target="_blank" rel="noopener noreferrer">Zobacz</Button>
                </Back>
            </ProjectContainer>
            <ProjectContainer>
                <Front>
                    <img src={orlik} alt="Orlik page "/>
                </Front>
                <Back>
                    <h3>Orlik</h3>
                    <p>
                        Orlik to aplikacja, dzięki której będzie można dodać, zarezerwować orlik. To przy pisaniu tej
                        aplikacji poznawałem świat backend`u pisząc w języku PHP. W moim repozytorium można znaleźć kod
                        pisany w JS oraz PHP. Jest to mój pierwszy samodzielny projekt.
                    </p>
                </Back>
            </ProjectContainer>
        </Div>
    )
}