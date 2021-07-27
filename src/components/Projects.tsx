import styled from "styled-components"

const Div = styled.div`
  grid-column: center-start / center-end;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 2rem;
  background-color: rgba(0, 0, 0, .2);

  border: .4rem solid black;
  border-radius: 5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 2rem;
  margin: 1rem;
  background-color: orange;

  h3 {
    margin: 1rem;
    font-size: 2rem;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    letter-spacing: 1.7px;
    line-height: 1.5;
  }
`

const Button = styled.button`
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  background: transparent;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .2s;
  border: 1px solid black;
  
  :hover {
    -webkit-box-shadow: 0 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0 5px 40px -10px rgba(0, 0, 0, 0.57);
    letter-spacing: 2px;
    border-radius: 10rem;
  }
`
export const Projects = () => {
    return (
        <Div id='projects'>
            <ProjectContainer>
                <h3>QuizLab</h3>
                <p>Aplikacja dzięki której można poszerzać swoją wiedzę z zakresu frontend`u. Użytkownik może zagrać
                    bez konieczności rejestracji. Przy tworzeniu korzystałem z takich technologii jak TypeScript, React,
                    Redux, StyledComponents. Do stworzenia bazy danych oraz autoryzacji użytkowników użyłem platformy
                    Firebase.
                </p>
                <Button>Zobacz Więcej</Button>
            </ProjectContainer>
            <ProjectContainer>
                <h3>Weather State</h3>
                <p>
                    Aplikacja umożliwia sprawdzenie pogody w dowolnym mieście na ziemi. W menu miasta istnieje możliwość
                    dodania do listy ulubionych. Wszystkie ulubione miasta ładują się automatycznie. Dane pogodowe
                    pobierane są z serwisu OpenWeatherMap. Do napisania Weather State użyłem TypeScript, React, Redux i
                    StyledComponents.
                </p>
                <Button>Zobacz Więcej</Button>
            </ProjectContainer>
            <ProjectContainer>
                <h3>TodoApp</h3>
                <p>
                    TodoApp to bardzo prosta aplikacja, która służy do tworzenia list z zadaniami. Był to pierwszy
                    projekt, który napisałem w TypeScripcie. TodoApp powstała przy pomocy React`a, Redux`a i
                    StyledComponent`s.
                </p>
                <Button>Zobacz Więcej</Button>
            </ProjectContainer>
            <ProjectContainer>
                <h3>Orlik</h3>
                <p>
                    Orlik to aplikacja, dzięki której będzie można dodać, zarezerwować orlik. To przy pisaniu tej
                    aplikacji poznawałem świat backend`u pisząc w języku PHP. W moim repozytorium można znaleźć kod
                    pisany w JS oraz PHP. Jest to mój pierwszy samodzielny projekt.
                </p>
                <Button>Zobacz Więcej</Button>
            </ProjectContainer>
        </Div>
    )
}